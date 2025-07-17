import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridLayoutModule } from './layout/grid-layout.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    GridLayoutModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
