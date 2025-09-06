import {
  Component,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, Subscription } from 'rxjs';
import { WeatherService } from '../../../core/services/service-weather/weather.service';
import { GeoLocationService } from '../../../core/services/service-geo-location/geo-location.service';
import Swal from 'sweetalert2';
import {
  forwardStaggerTrigger,
  fadeInTrigger,
  zoomInTrigger,
} from '../../../core/animations/animations';

@Component({
  selector: 'app-page-introduction',
  standalone: false,
  templateUrl: './page-introduction.component.html',
  styleUrl: './page-introduction.component.scss',
  animations: [fadeInTrigger, forwardStaggerTrigger, zoomInTrigger],
})
export class PageIntroductionComponent implements OnInit {
  pageTitle: any;
  pageHeading: any;
  pageDesc: any;
  temperature?: number = 0;
  weatherIcon?: string = '';
  weatherDescription: string = 'No Data';
  currentWeather: any;
  isLoading?: boolean = false;
  isPositionAvailable: boolean = false;
  geoLocErrMessage: string | null = null;

  @Output() isLoadingMessage: string = 'loading';

  private _weatherSub?: Subscription;
  private _locPosSub?: Subscription;
  private _locErrSub?: Subscription;
  public _titleSub?: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _titleService: Title,
    private _weatherService: WeatherService,
    private _geoLocServive: GeoLocationService
  ) {}

  ngOnInit(): void {
    this.setPageTitleFromRoute();
    this._geoLocServive.getLocation();
    this.getCurrentLocation();
  }

  /**
   * Requests device current-geolocation every 60000 milli-seconds.
   * @position - tracking Id returned by the watchPosition method, used to clear the watch later.
   * @returns location-coord object | null location-coord object | Error.
   */
  getCurrentLocation() {
    //subscribe to changing geo-loc positions
    this._locPosSub = this._geoLocServive.position$.subscribe((position) => {
      if (position) {
        this.isPositionAvailable = true;
        this.getcurrentWeather(position);
      }
    });

    //subscribe to geo-loc errors
    this._locErrSub = this._geoLocServive.error$.subscribe((_error) => {
      if (_error) {
        Swal.fire('Geo-location!', '' + _error);
        this.isLoading = false;
        this._geoLocServive.clearRequestTimer();
      }
    });
  }

  /**
   * Retrieves current-geolocation.
   * @param position - current current-geolocation position.
   * @returns current geolocation-based weather object | server error object.
   */
  getcurrentWeather(position: GeolocationPosition) {
    this._weatherSub = this._weatherService
      .getCurrentWeather(position.coords.latitude, position.coords.longitude)
      .subscribe({
        next: (weatherData) => {
          this.currentWeather = weatherData;
          this.temperature = Math.round(this.currentWeather?.main?.temp);
          this.weatherIcon = this.currentWeather.weather[0]?.icon + '@2x.png';
          this.weatherDescription = this.currentWeather.weather[0]?.description;
          this.isLoading = false;
        },
        error: (_error) => {
          
          Swal.fire('Server Error!', 'Fetching weather data failed');
          this._geoLocServive.clearRequestTimer();
          this.isLoading = false;
        },
      });
  }

  /**
   * Sets the page title and meta tags based on the current route.
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

        console.log('New page title - ' + this.pageTitle);

        if (this.pageTitle) {
          let _title = `Portfolio - ${this.pageTitle}`;
          this._titleService.setTitle(_title);
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes[this.pageTitle]) {
      console.log('Value changed:', changes['value'].currentValue);
    }
  }

  redirectToContactUs() {
    this._router.navigate(['/contact']);
  }

  redirectToProjects() {
    this._router.navigate(['/projects']);
  }

  //Unsubscribe
  ngOnDestroy(): void {
    this._weatherSub?.unsubscribe();
    this._locPosSub?.unsubscribe();
    this._locErrSub?.unsubscribe();
  }
}
