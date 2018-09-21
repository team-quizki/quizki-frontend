import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { UserRegistration } from './../user/user-registration';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  specificUserRegistration = new UserRegistration('','','',1,1,'','');
    /* recall that the fields in UserRegistration are as follows.
    public id: string,
    public password: string,
    public username: string,
    public enabled : number,
    public role_id: number,
    public email: string,
    public fullname: string,
    public demographic?: string, // optional field
    */

    constructor() {
     // setting this is the key to initial select.
    }

    ngOnInit() {
    }

// Establish FormControls for each form-field use for user-registration

    fullnameFormControl = new FormControl('',
      [Validators.required, Validators.minLength(5), Validators.pattern("([a-zA-Z0-9])[a-zA-Z0-9]* ([a-zA-Z0-9])[a-zA-Z0-9., ]*")]);

    getFullnameErrorMessage() {
        return this.fullnameFormControl.hasError('required') ? 'You must enter a value' :
          this.fullnameFormControl.hasError('minlength') ? 'Length must be at least 5 characters' :
          this.fullnameFormControl.hasError('pattern') ? 'Use letters and with a space between FirstName and LastName' :
          '';
    }

    emailFormControl = new FormControl('',
      [Validators.required, Validators.email]);

    getEmailErrorMessage() {
      return this.emailFormControl.hasError('required') ? 'You must enter a value' :
        this.emailFormControl.hasError('email') ? 'Not a valid email.' :
        '';
    }

    usernameFormControl = new FormControl('',
      [Validators.required, Validators.minLength(5), Validators.pattern("([a-zA-Z])[a-zA-Z0-9]*")]);

    getUsernameErrorMessage() {
        return this.usernameFormControl.hasError('required') ? 'You must enter a value' :
          this.usernameFormControl.hasError('minlength') ? 'Length must be at least 5 characters' :
          this.usernameFormControl.hasError('pattern') ? 'Use letters, numbers and underscores.' :
          '';
    }

    hidePassword = true;

    passwordFormControl = new FormControl('',
      [Validators.required, Validators.minLength(5), Validators.pattern("([a-zA-Z0-9_-])[a-zA-Z0-9_-]*")]);

    getPasswordErrorMessage() {
        return this.passwordFormControl.hasError('required') ? 'You must enter a value' :
          this.passwordFormControl.hasError('minlength') ? 'Length must be at least 5 characters' :
          this.passwordFormControl.hasError('pattern') ? 'Use letters, numbers and special characters.' :
          '';
    }


  // Establish the controls and methods for the submit button
  submitButtonIsDisabled = true;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Hurrah! Submit button was pressed.");
  }

  // TODO: Remove this when we're done, it is just used to verify data capturing to correct variable
  get diagnostic() { return JSON.stringify(this.specificUserRegistration); }

}
