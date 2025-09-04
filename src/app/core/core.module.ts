import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleThemeService } from './services/service-toggle-theme/toggle-theme.service';
import { ProjectsService } from './services/service-projects/projects.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ToggleThemeService,
    ProjectsService,
  ]
})
export class CoreModule { }
