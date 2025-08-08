import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    
    //initialize the form
    this.contactForm = new FormGroup({

      personalDetails: new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        emailAddress: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
      }),
      
      messageDetails: new FormGroup({
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required]),
      }),
    });
  }

  //getter for form-control[fullName]
  get _firstName() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get('firstName');
  }

  //getter for form-control[lastName]
  get _lastName() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get('lastName');
  }

  //getter for form-control[emailAddress]
  get _emailAddress() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get('emailAddress');
  }

  //getter for form-control[subject]
  get _subject() {
    return (this.contactForm.get('messageDetails') as FormGroup)?.get('subject');
  }

  //getter for form-control [message]
  get _message() {
    return (this.contactForm.get('messageDetails') as FormGroup)?.get('message');
  }

  //submit user form
  onSubmit() {
    console.log('Got triggured...');

    if (this.contactForm.invalid) {
      console.log('Form validation failed...');
      return;
    }
  }

  onReset() {
    this.contactForm.reset();
  }

  ongOnDestroy(): void {}
}
