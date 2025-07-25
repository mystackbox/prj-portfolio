import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    data: {
      title: 'sorry!',
      metaTags: [
        { name: 'short-desc', content: ' page currently unavailable' },
        {
          name: 'page-desc',
          content: 'A brief about the portfolio and the developer',
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
