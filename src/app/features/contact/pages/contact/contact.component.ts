import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { CanDeactivateIF } from '../../../../core/route-guards/unsaved-changes/unsaved-change.guard';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements CanDeactivateIF {
  contactForm!: FormGroup;
  isFormError?: boolean = false;
  isSending?: boolean = false;
  errorMessage = '';

  @Output() isSendingMessage: string = 'sending';

  constructor(private _mailService: EmailService) {}

  ngOnInit(): void {
    // const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //initialize the form
    this.contactForm = new FormGroup({
      personalDetails: new FormGroup({
        // personal details formGroup
        name: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
        ]),
        surname: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email,
          Validators.maxLength(30),
          // Validators.pattern(emailPattern),
        ]),
      }),

      messageDetails: new FormGroup({
        // message details formGroup
        subject: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
        message: new FormControl('', [
          Validators.required,
          Validators.maxLength(200),
        ]),
      }),
    });
  }

  //getter for fullName
  get _firstName() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get('name');
  }

  //getter for lastName
  get _lastName() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get(
      'surname'
    );
  }

  //getter for emailAddress
  get _emailAddress() {
    return (this.contactForm.get('personalDetails') as FormGroup)?.get('email');
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

  //deactivate onUnsaved changes 
  onUnsavedChanges(): Observable<boolean> | Promise<boolean> | boolean {
    //if the form is not dirty and not submitted, allow proceeding
    if (this.contactForm.pristine) {
      return true;
    }
    //if the form is dirty, show confirmation dialog
    return Swal.fire({
      title: 'Are you sure?',
      text: 'You want to discard the changes.',
      showCancelButton: true,
      confirmButtonColor: '#FF0000',
      cancelButtonColor: '#20B2AA',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => result.isConfirmed);
  }

  //submit user form
  onSubmit() {
    if (this.contactForm.invalid || this.contactForm.pristine) {
      this.contactForm.markAllAsTouched();
      return;
    }

    //restructure the form data object
    const formattedFormData = {
      ...this.contactForm.value.personalDetails,
      ...this.contactForm.value.messageDetails,
    };

    //prompt the user for confirmation before sending the email
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to submit the form.',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#FF0000',
      cancelButtonText: 'No',
      cancelButtonColor: '#20B2AA',
    }).then((_userConfirmOption) => {
      //if the user confirms, send the email
      if (_userConfirmOption.isConfirmed) {
        this.isSending = true;

        this._mailService.sendEmail(formattedFormData).then(
          (_serverResponse) => {
            this.isSending = false;
            this.contactForm.reset();
            Swal.fire('Successful!', 'Your message has been sent.');
          },
          (_serverError) => {
            this.isSending = false;
            Swal.fire('Failed!', 'Sending message failed. Please try again');
          }
        );

         this.contactForm.markAsPristine;
      }
    });
  }

  //Reset the form
  onReset() {
    this.contactForm.reset();
    this.contactForm.markAsPristine;
  }

  ngOnDestroy(): void {}
}
