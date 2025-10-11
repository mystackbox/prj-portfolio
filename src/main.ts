/// <reference types="@angular/localize" />

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';


platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
  providers: [
        provideAnimations(),
    provideNoopAnimations(),
  ]
})
  .catch(err => console.error(err));
