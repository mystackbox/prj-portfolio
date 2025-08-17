import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    data: {
      title: 'Projects',
      metaTags: [
        { name: 'short-desc', content: 'recently completed project' },
        {
          name: 'page-desc',
          content: 'recently completed project.',
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
