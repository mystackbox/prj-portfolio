import { Injectable } from '@angular/core';
import { GeoLocationService } from '../service-geo-location/geo-location.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  //api details
  private readonly apiKey = environment.weatherApiKey;
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

  constructor(
    private _geoLocServive: GeoLocationService,
    private _http: HttpClient
  ) {}

  /**
   * Retrieves current-geolocation.
   * @param Lat - current-geolocation position Latitude.
   * @param Lon - current-geolocation position Longitude.
   * @returns - current geolocation-based weather object | server error object.
   */
  getCurrentWeather(lat: number, lon: number): Observable<any> {
    return this._http.get<any>(
      `${this.apiUrl}lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
  }
}
