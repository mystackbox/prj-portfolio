import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { CommonModule, DatePipe } from '@angular/common';
import { ContactComponent } from '../pages/contact/contact.component';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        DatePipe
      ],
      imports: [CommonModule]
    });
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
