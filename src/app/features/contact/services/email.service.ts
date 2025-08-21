import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceID = environment.emailjs.serviceID;
  private templateID = environment.emailjs.templateID;
  private publicKey = environment.emailjs.publicKey;

  constructor(private datePipe: DatePipe) {}

  sendEmail(formData: any) {
    //format date first
    const formattedDate = this.datePipe?.transform(
      new Date(),
      'd MMMM y, h:mm a'
    );

    //add a timestamp to the form data
    const dataWithTimestamp = {
      ...formData,
      time: formattedDate,
    };

    //send form data to the mail server
    return emailjs.send(
      this.serviceID,
      this.templateID,
      dataWithTimestamp,
      this.publicKey
    );
  }
}
