import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { SiteIdentityComponent } from './site-identity/site-identity/site-identity.component';

@NgModule({
  declarations: [
    GridLayoutComponent,
    SiteIdentityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridLayoutComponent
  ]
})
export class GridLayoutModule { }
