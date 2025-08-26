import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    data: {
      title: 'Oops!',
      metaTags: [
        { name: 'short-desc', content: ' page currently unavailable' },
        {
          name: 'page-desc',
          content: 'the resource could not be found ',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
