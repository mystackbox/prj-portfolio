import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BrowserCheckService } from '../service-browser-check/browser-check.service';

@Injectable({
  providedIn: 'root',
})
export class GeoLocationService {
  watchId: any | null = null;
  public position$ = new BehaviorSubject<GeolocationPosition | null>(null);
  public error$ = new BehaviorSubject<string | null>(null);

  private intervalId: any;
  private timeoutId: any;

  constructor(private browserCheck: BrowserCheckService) {}

  /**
   * Requests and  monitors device current-geolocation.
   * @property watchId - tracking Id returned by the watchPosition method, used to clear the watch later.
   * @returns location-coord object | null location-coord object | Error.
   */
  getLocation() {

    console.log('Get Location Executed...')

    if (this.watchId != null) return; // avoid duplicates

    //prevent SSR Error when client object Navigator now found
    if (this.browserCheck.isBrowser()) {

      this.timeoutId = setTimeout(() => {
        console.log('Geo-Loc request launched...');

        this.intervalId = setInterval(() => {
          console.log('Loc requested...');

          if (navigator.geolocation) {
            this.watchId = navigator.geolocation.getCurrentPosition(
              (position) => {
                this.position$.next(position);
                this.error$.next(null);
              },
              (error) => {
                this.position$.next(null);
                switch (error.code) {
                  case error.PERMISSION_DENIED:
                    this.error$.next(
                      'Device geo-location position access denied'
                    );
                    break;
                  case error.POSITION_UNAVAILABLE:
                    this.error$.next(
                      'GeoLocation position currently unavailable'
                    );
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
        }, 5000);

      }, 0);

      if (!navigator.geolocation) {
        this.error$.next('Geolocation is not supported by this browser.'); //check if browser supports geolocation
        return;
      }
    }
  }

  /**
   *  Stops monitoring the device current-geolocation.
   * @returns void
   * */
  clearRequestTimer() {
    //prevent continuous geo-location position requests
    console.log('Geo-Loc request stopped...');
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
  }
}
