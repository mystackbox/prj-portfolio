import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridLayoutModule } from './layout/grid-layout.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './features/weather/pages/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent, 
  ],
  imports: [
    GridLayoutModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
