import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
         provideHttpClient(withFetch()), // 1. Provide the HttpClient service
        provideHttpClientTesting(), // 2. Enable the testing mock backend
      ]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
