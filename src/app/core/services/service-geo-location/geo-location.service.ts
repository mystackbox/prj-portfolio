import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoLocationService {

  watchId: any | null = null;
  public position$ = new BehaviorSubject<GeolocationPosition | null>(null);
  public error$ = new BehaviorSubject<string | null>(null);

  /**
   * Requests and  monitors device current-geolocation.
   * @property watchId - tracking Id returned by the watchPosition method, used to clear the watch later.
   * @returns location-coord object | null location-coord object | Error.
   */
  startMonitoring() {
    if (this.watchId != null) return; // avoid duplicates

    if (navigator.geolocation) {
          this.watchId = navigator.geolocation.getCurrentPosition(
      (position) => {
        this.position$.next(position);
        this.error$.next(null);
      },
      (error) => {
        this.position$.next(null);

        switch(error.code) {
          case error.PERMISSION_DENIED:
            this.error$.next('Device geo-location position access denied');
            break;
          case error.POSITION_UNAVAILABLE:
            this.error$.next('GeoLocation position currently unavailable');
            break;
          case error.TIMEOUT:
            this.error$.next('Device geoLocation request timed out');
            break;
          default:
            this.error$.next('An unknown error occurred');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
    }

    if (!navigator.geolocation) {
      this.error$.next('Geolocation is not supported by this browser.'); //check if browser supports geolocation
      return;
    }

  }

   /**
   *  Stops monitoring the device current-geolocation.
   * @returns void
   * */
  stopMonitoring() {
    if (this.watchId != null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }
}
