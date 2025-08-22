import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, Subscription } from 'rxjs';
import { WeatherService } from '../../../core/services/weather/weather.service';
import { GeoLocationService } from '../../../core/services/geo-location/geo-location.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-introduction',
  standalone: false,
  templateUrl: './page-introduction.component.html',
  styleUrl: './page-introduction.component.scss',
})
export class PageIntroductionComponent {
  pageTitle: any;
  pageHeading: any;
  pageDesc: any;
  temperature?: number = 0;
  weatherIcon?: string = '';
  currentWeather: any;
  isLoading?: boolean = false;
  isLoadingMessage: string = 'loading...';
  isPositionAvailable: boolean = false;

  private _weatherSub?: Subscription;
  private _posSub?: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _titleService: Title,
    private _weatherService: WeatherService,
    private _geoLocServive: GeoLocationService
  ) {}

  ngOnInit() {
    this.setPageTitleFromRoute();

    this._posSub = this._geoLocServive.getCurrentPosition().subscribe({
      next: (position) => {
        this.isLoading = true;
        this.isPositionAvailable = true;
        this.getcurrentWeather(position);
      },
      error: (error) => {
        // console.error('Error getting location:', error);
        Swal.fire('No weather update!', error.message);
        this.isLoading = false;
        this.isPositionAvailable = false;
      },
    });
  }

  getcurrentWeather(position: GeolocationPosition) {
    this._weatherSub =  this._weatherService.getCurrentWeather(position).subscribe({
      next: (weatherData) => {
        this.currentWeather = weatherData;
        this.temperature = Math.round(this.currentWeather?.main?.temp);
        this.weatherIcon = this.currentWeather.weather[0]?.icon + '@2x.png';
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching weather data:', error);
        Swal.fire('Server Error!', 'Error fetching weather data');
        this.isLoading = false;
      },
    });
  }

  /**
   * Sets the page title and meta tags based on the current route.
   * It listens for navigation events and updates the title accordingly.
   */
  setPageTitleFromRoute() {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this._activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.pageTitle = data['title'];
        this.pageHeading = data['metaTags'][0].content;
        this.pageDesc = data['metaTags'][1].content;

        if (this.pageTitle) {
          let _title = `Portfolio - ${this.pageTitle}`;
          this._titleService.setTitle(_title);
        }
      });
  }

  redirectToContactUs() {
    this._router.navigate(['/contact']);
  }

  redirectToProjects() {
    this._router.navigate(['/projects']);
  }

  ngOnDestroy() {
    this._weatherSub?.unsubscribe();
    this._posSub?.unsubscribe();
  }
}
