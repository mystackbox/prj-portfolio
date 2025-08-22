import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { UnsavedChangesGuard } from '../../core/route-guards/unsaved-changes/unsaved-change.guard';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    canDeactivate: [UnsavedChangesGuard],
    data: {
      title: 'Contact',
      metaTags: [
        { name: 'short-desc', content: 'what is your thought?' },
        { name: 'page-desc', content: 'let me know your thought!' },
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
