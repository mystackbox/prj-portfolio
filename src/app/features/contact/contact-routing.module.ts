import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [{ path: '', component: ContactComponent,
   data: {
            title: 'Contact',
            metaTags: [
              { name: 'short-desc', content: 'what is your thought?' },
              { name: 'page-desc', content: 'Please drop a comment using the contact form below.' },
            ]
        } 
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
