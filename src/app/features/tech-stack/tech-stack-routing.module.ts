import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';

const routes: Routes = [
  {
    path: '',
    component: TechStackComponent,
    data: {
      title: 'Tech Stack',
      metaTags: [
        { name: 'short-desc', content: ' front-end developer skills set' },
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
export class TechStackRoutingModule {}
