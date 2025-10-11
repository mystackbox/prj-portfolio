import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { SiteIdentityComponent } from './site-identity/site-identity/site-identity.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel/carousel.component';
import { PageIntroductionComponent } from './page-introduction/page-introduction/page-introduction.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GridLayoutComponent,
    SiteIdentityComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    PageIntroductionComponent,
  ],
  imports: [NgbModule, CommonModule, AppRoutingModule, SharedModule],
  exports: [
    GridLayoutComponent,
    SiteIdentityComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    PageIntroductionComponent,
  ],
})
export class GridLayoutModule {}
