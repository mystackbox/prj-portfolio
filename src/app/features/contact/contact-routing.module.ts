import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { UnsavedChangesGuard } from '../../core/route-guards/unsaved-changes/unsaved-change.guard';
import { environment } from '../../../environments/environment.prod';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    canDeactivate: [UnsavedChangesGuard],
    data: {
      title: 'Contact',
      metaTags: [
         { name: 'description', content: 'Yingisani Angular Personal Portfolio' },
        { name: 'short-desc', content: 'Please, let me know your thought?' },
        { name: 'image', content: environment.baseUrl + 'public/img/site-ui/yingi-portfolio.png'},
        { name: 'robots', content: 'index, follow'},
        { property: 'article:author', content: 'Yingisani Chiqinda'},

        { property: 'og:site_name', content: 'Yingisani\'s Portfolio' },
        { property: 'og:title', content: 'Personal portfolio built using Angular' },
        { name: 'description', proprety: 'og:description', content: 'I\'m passionate Frontend Developer with a strong focus on building high-performance single-page applications using Angular framework<br>. Proficient in Responsive UI Designs, Angular 16+, TypeScript, JavaScript, HTML5, SCSS, Bootstrap 5, RESTful API integration, Unit Testing, RxJs, SEO & PO, and Source Control (GitHub & GitHub)..' },
        { property: 'og:type', content: 'Website' },
        { property: 'og:description', content: 'Yingisani Angular Personal Portfolio' },
        { property: 'og:image', content: environment.baseUrl + 'public/img/site-ui/yingi-portfolio.png' },
        { property: 'og:image:secure_url', content: environment.baseUrl + 'public/img/site-ui/yingi-portfolio.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Yingisani Angular Personal Portfolio' },
        { property: 'og:url', content: environment.baseUrl},

        { name: 'twitter:card', content: 'Summary'},
        { name: 'twitter:title', content: 'Personal portfolio built using Angular'},
        { name: 'twitter:description', content: 'A passionate Frontend Developer with a strong focus on building high-performance single-page applications using Angular framework<br>. Proficient in Responsive UI Designs, Angular 16+, TypeScript, JavaScript, HTML5, SCSS, Bootstrap 5, RESTful API integration, Unit Testing, RxJs, SEO & PO, and Source Control (GitHub & GitHub)..' },
        
        { name: 'twitter:url', content: environment.baseUrl},
        { name: 'twitter:site', content: '@yingi'},
        { name: 'twitter:creator', content: '@yingi'},
        { name: 'twitter:image', content: environment.baseUrl + 'public/img/site-ui/yingi-portfolio.png' },
        { name: 'twitter:image:src', content: environment.baseUrl + 'public/img/site-ui/yingi-portfolio.png' },
        { name: 'twitter:image:alt', content: 'Yingisani Angular Personal Portfolio' }
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UnsavedChangesGuard],
})
export class ContactRoutingModule {}
