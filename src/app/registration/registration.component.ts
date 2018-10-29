import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';

import { UserRegistration } from './../user/user-registration';
import { RegisterService,
  ValidateUsernameNotTaken,
  ValidateEmailNotTaken} from './register.service';
//import { map } from '../../../node_modules/rxjs/operators';

//import { map } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  providers: [ RegisterService ],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

// variables
  registerForm: FormGroup;
  hidePassword: boolean;
  errorMessage: string;
  registerSubmitted: boolean;
  specificUserRegistration = new UserRegistration('','',2,'','');

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
   // setting this is the key to initial select.
  }

  ngOnInit() {
    this.hidePassword = true;
    this.registerSubmitted = false;
    // email validator still allows someEmail@somewhere because that is a valid emailValue
    // according to the documentation. reseach further later.
    this.registerForm = this.formBuilder.group({
      fullname: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern("([a-zA-Z0-9])[a-zA-Z0-9]* ([a-zA-Z0-9])[a-zA-Z0-9., ]*")
        ]],
      email: ['',
        {
          validators:
            [
              Validators.email,
              Validators.required
            ],
          asyncValidators:
            [
              ValidateEmailNotTaken.createValidator(this.registerService)
            ],
          updateOn: 'blur'
        }],
      username: ['',
        {
          validators:
            [
              Validators.required,
              Validators.minLength(5),
              Validators.pattern("([a-zA-Z0-9_])[a-zA-Z0-9_]*")
            ],
          asyncValidators:
            [
              ValidateUsernameNotTaken.createValidator(this.registerService)
            ],
          updateOn: 'blur'
        }],
      password: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern("([a-zA-Z0-9_-])[a-zA-Z0-9_-]*")
        ]]
    });

  }

//  getter for form fields
 get f() { return this.registerForm.controls; }
 get valid() {return this.registerForm.valid;}

// getters for for form controls by form control name
 get fullnameFC() {return this.registerForm.get('fullname');}
 get usernameFC() {return this.registerForm.get('username');}
 get emailFC() {return this.registerForm.get('email');}
 get passwordFC() {return this.registerForm.get('password');}

// TODO: need to change getErrorMessage, so any form can use it.
// yet solution works for the near term.

 public getErrorMessage(formControlName: string) {

   switch(formControlName){
     case 'fullname':
       this.errorMessage = this.fullnameFC.hasError('required') ? 'You must enter a value' :
         this.fullnameFC.hasError('minlength') ? 'Length must be at least 5 characters' :
         this.fullnameFC.hasError('pattern') ? 'Use letters and with a space between FirstName and LastName' :
         '';
       break;
     case 'email':
       this.errorMessage = this.emailFC.hasError('required') ? 'Email is required.' :
         this.emailFC.hasError('email') ? 'Enter a valid email.' :
         this.emailFC.hasError('emailTaken') ? 'Please choose a different email or login if this is your email.' :
         '';
       break;
     case 'username':
       this.errorMessage = this.usernameFC.hasError('required') ? 'You must enter a value' :
         this.usernameFC.hasError('minlength') ? 'Length must be at least 5 characters' :
         this.usernameFC.hasError('pattern') ? 'Use letters, numbers and underscores.' :
         this.usernameFC.hasError('usernameTaken') ? 'Please pick a different username or login if this is your username.' :
         '';
       break;
     case 'password':
       this.errorMessage = this.passwordFC.hasError('required') ? 'You must enter a value' :
         this.passwordFC.hasError('minlength') ? 'Length must be at least 5 characters' :
         this.passwordFC.hasError('pattern') ? 'Use letters, numbers and special characters.' :
         '';
       break;
     default:
            this.errorMessage='';
       break;
     }
     return this.errorMessage;
 }


  // Establish the controls and methods for the submit button
  onSubmit() {
    if(this.registerForm.invalid) { return;} // the form should never be invalid at this point...
    this.registerSubmitted = true; // temporarily prevent multiple submits

    console.log("Form Submitted");

    //consider writing a set method
    this.specificUserRegistration.password = this.passwordFC.value;
    this.specificUserRegistration.name = this.usernameFC.value;
    this.specificUserRegistration.roleId = 2;
    this.specificUserRegistration.email = this.emailFC.value;
    this.specificUserRegistration.fullname = this.fullnameFC.value;

    let localResult;

    //need to add failure processing
    //for examples 1) username invalid, or 2) username valid & password invalid

    this.registerService.registerUser(this.specificUserRegistration)
        .subscribe(
          (result) => {
            localResult = result;
            console.log("in onSubmit, SUCCESS registerUser = " + JSON.stringify(localResult));
      //      this.registerSubmitted=false;
          },
          (resultError) => {
            console.log("in onSubmit, resultError of registerUser = " + JSON.stringify(resultError));
            console.log("need to write code for error sending back")
          }
        );

/* SAVE WORKING ORIGINAL
    this.registerService.registerUser(this.specificUserRegistration)
        .subscribe((result) => {
          localResult = result;
          console.log("in onSubmit, result of registerUser = " + localResult);
          });

*/
    //TODO: remove console.log and add other funtionaliy like:
    // call to backend to created registration and send to login.
    // perhaps route to login on the button after the registration completes
    // successfully

  }


  public cancelRegistration(){
    // consider asking the user for cancel confirmation.
    this.registerForm.reset();

    // TODO: write a reset method for UserRegistration
    this.specificUserRegistration.fullname = '';
    this.specificUserRegistration.name = '';
    this.specificUserRegistration.password = '';
    this.specificUserRegistration.email = '';

    // routed to homepage is done on the button. of course eventually,
    // routing should be back page the user was on orginially ...
  }



  // Saving the following diagonostic example for future use.
  // TODO: Remove these when done, it is just used to verify data capturing to correct variable
  //get registerFormDiagnostic() { return JSON.stringify(this.registerForm.value); }

}
