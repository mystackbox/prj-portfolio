import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { SiteIdentityComponent } from './site-identity/site-identity/site-identity.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [
    GridLayoutComponent,
    SiteIdentityComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridLayoutComponent
  ]
})
export class GridLayoutModule { }
