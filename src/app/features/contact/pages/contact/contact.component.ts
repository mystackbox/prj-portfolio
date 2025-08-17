import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { CanDeactivateIF } from '../../../../core/route-guards/unsaved-changes/unsaved-change.guard';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements CanDeactivateIF {
  contactForm!: FormGroup;
  formError?: boolean = false;
  private _isSubmitted = false;

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
        this.formError = true;
      return;
    } 
  }

  //Reset the form
  onReset() {
    this.contactForm.reset();
    this.contactForm.markAsPristine;
    this.formError = false;
  }

  ngOnDestroy(): void {}
}
