import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [{ path: '', component: AboutComponent,
   data: {
            title: 'About',
            metaTags: [
              { name: 'short-desc', content: 'portfolio background' },
              { name: 'page-desc', content: 'A brief introduction about myself' },
            ]
        }
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
