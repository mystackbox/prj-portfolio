import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [{ path: '', component: ContactComponent,
   data: {
            title: 'Contact',
            metaTags: [
              { name: 'short-desc', content: 'Let me know your thoughts' },
              { name: 'page-desc', content: 'A brief about the portfolio and the developer' },
            ]
        } 
      }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
