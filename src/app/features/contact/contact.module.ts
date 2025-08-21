import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact/contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule, SharedModule],
  providers: [EmailService, DatePipe],
})
export class ContactModule {}
