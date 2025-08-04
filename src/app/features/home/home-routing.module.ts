import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent,
     data: {
            title: 'home',
            metaTags: [
              { name: 'short-desc', content: 'front-end developer portfolio' },
              { name: 'page-desc', content: 'welcome to my Angular portfolio' },

            ]
        }
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
