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
  emptyForm?: boolean = false;

  constructor() {}

  ngOnInit(): void {
    //initialize the form
    this.contactForm = new FormGroup({
      personalDetails: new FormGroup({
        // personal details formGroup
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        emailAddress: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
      }),

      messageDetails: new FormGroup({
        // message details formGroup
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required]),
      }),
    });
  }

  //getter for fullName
  get _firstName() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get(
      'firstName'
    );
  }

  //getter for lastName
  get _lastName() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get(
      'lastName'
    );
  }

  //getter for emailAddress
  get _emailAddress() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get(
      'emailAddress'
    );
  }

  //getter for subject
  get _subject() {
    return (this.contactForm.get('messageDetails') as FormGroup)?.get(
      'subject'
    );
  }

  //getter for message
  get _message() {
    return (this.contactForm.get('messageDetails') as FormGroup)?.get(
      'message'
    );
  }

  //submit user form
  onSubmit() {
    if (this.contactForm.invalid || this.contactForm.pristine) {
      this.emptyForm = true;
      return;
    } else {
      this.emptyForm = false;
    }
  }

  onReset() {
    this.contactForm.reset();
    this.emptyForm = false;
  }

  ongOnDestroy(): void {}
}
