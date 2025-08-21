import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridLayoutModule } from './layout/grid-layout.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GridLayoutModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,     
  ],
  providers: [
    provideClientHydration(withEventReplay()),

    /* 
      withFetch() - replaces XMLHttpRequest with fetch API for (SSR).
      Enables HttpClient to use get/post/delete/and put
    */
    provideHttpClient(withFetch())

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
