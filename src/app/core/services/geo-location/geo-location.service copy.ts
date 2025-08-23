import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  constructor() { }

  /*
  GeolocationPosition: Interface representing the position of the device.
  It includes properties like coords (coordinates) and timestamp.
  */
    getCurrentPosition(): Observable<GeolocationPosition> {
      
    return new Observable((_geoLocResponse) => {
      // Check if the Geolocation API is available in the browser
      if (!navigator.geolocation) {
        _geoLocResponse.error('Geolocation not supported');
        Swal.fire('Sorry!', 'Your browser does not support Geolocation.');
        return;
      }

      // Use the Geolocation API to get the current position
      navigator.geolocation.getCurrentPosition(
        (_currentLocPosition) => {
          _geoLocResponse.next(_currentLocPosition);
          _geoLocResponse.complete();
        },
        (error) => {
          _geoLocResponse.error(error);
        }
      );

    });
  }
}
