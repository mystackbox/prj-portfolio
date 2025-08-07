import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  conatcForm!: FormGroup;

  ngOnInit(): void {
    //initialize the form
    this.conatcForm = new FormGroup({
      personalDetails: new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        emailAddress: new FormControl('', [Validators.required]),
      }),
      messageDetails: new FormGroup({
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required]),
      }),
    });
  }

  constructor() {}

  //submit user form
  onSubmit() {
    console.log('Got triggured...');

    if (this.conatcForm.invalid) {
      console.log('Form validation failed...');
      return;
    }
  }

  ongOnDestroy(): void {}
}
