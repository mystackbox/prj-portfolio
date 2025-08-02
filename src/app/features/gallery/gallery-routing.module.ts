import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';


const routes: Routes = [{ path: '', component: GalleryComponent,
       data: {
            title: 'gallery',
            metaTags: [
              { name: 'short-desc', content: 'developer photo gallery' },
              { name: 'page-desc', content: 'Hi, welcome to my portfolio photo gallery ' },

            ]
        }
 }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
