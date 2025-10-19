import {
  ChangeDetectorRef,
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
  staggerInFromLeftTrigger,
} from '../../../core/animations/animations';
import { TitleMetadataService } from '../../../core/services/service-title-metadata/title-metadata.service';

@Component({
  selector: 'app-page-introduction',
  standalone: false,
  templateUrl: './page-introduction.component.html',
  styleUrl: './page-introduction.component.scss',
  animations: [fadeInTrigger, forwardStaggerTrigger, staggerInFromLeftTrigger, zoomInTrigger],
})
export class PageIntroductionComponent implements OnInit {
  pageTitle: any;
  pageHeading: any;
  pageDesc: any;
  temperature?: number = 0;
  weatherIcon?: string = '';
  weatherDescription: string = 'No Data';
  currentWeather: any;
  hasChanges?: boolean = false;
  isPositionAvailable: boolean = false;
  geoLocErrMessage: string | null = null;

  private _weatherSub?: Subscription;
  private _locPosSub?: Subscription;
  private _locErrSub?: Subscription;
  public _titleSub?: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _metaService: TitleMetadataService,
    private _weatherService: WeatherService,
    private _geoLocServive: GeoLocationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setPageTitleFromRoute();
    this.getCurrentLocation();
  }

  /**
   * Requests device current-geolocation every 60000 milli-seconds.
   * @position - tracking Id returned by the watchPosition method, used to clear the watch later.
   * @returns location-coord object | null location-coord object | Error.
   */
  getCurrentLocation() {
    this._geoLocServive.getLocation();
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
        },
        error: (_error) => {
          Swal.fire('Server Error!', 'Fetching weather data failed');
          this._geoLocServive.clearRequestTimer();
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

        //detect route changes
        this.hasChanges = false;
        this.cdr.markForCheck();
        this.cdr.detectChanges();

        //upate call-to-action as per route changes
        this.pageTitle = data['title'];
        this.pageHeading = data['metaTags'][0].content;
        this.pageDesc = data['metaTags'][1].content;

        if (this.pageTitle) {
          //retrieve data from the activated route
          let _title = data['title']; 
          let _metaData = data['metaTags']

          //detect route data changes
          this.hasChanges = true; 

          //upate the meta tag using data from the component activated route
          this._metaService.updateTitle(_title);
          this._metaService.updateMetaTags(_metaData);
        }
        
      });
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
