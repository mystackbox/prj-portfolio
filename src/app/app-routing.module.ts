import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./features/news/news.module').then((m) => m.NewsModule),
  },

  {
    path: 'not-found',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },

  {
    path: 'skills-set',
    loadChildren: () =>
      import('./features/skills-set/skills-set.module').then(
        (m) => m.SkillsSetModule
      ),
  },

  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
