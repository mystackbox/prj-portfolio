import { Injectable } from '@angular/core';
import { GeoLocationService } from '../geo-location/geo-location.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private readonly apiKey = environment.weatherApiKey;
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

  constructor(
    private _geoLocServive: GeoLocationService,
    private _http: HttpClient
  ) {}

  getCurrentWeather(position: GeolocationPosition): Observable<any> {
    return this._http.get<any>(
      `${this.apiUrl}lat=${position?.coords.latitude}&lon=${position?.coords.longitude}&appid=${this.apiKey}&units=metric`
    );
  }
}
