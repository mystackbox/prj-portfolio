import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleThemeService } from './services/service-toggle-theme/toggle-theme.service';
import { ProjectsService } from './services/service-projects/projects.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ToggleThemeService,
    ProjectsService,
    provideHttpClient(withFetch()),
  ]
})
export class CoreModule { }
