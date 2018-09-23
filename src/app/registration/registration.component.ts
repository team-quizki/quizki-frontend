import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { UserRegistration } from './../user/user-registration';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  hidePassword: boolean;
  disableSubmit: boolean;

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

    constructor(
      private formBuilder: FormBuilder
    ) {
     // setting this is the key to initial select.
    }

    ngOnInit() {
      this.hidePassword = true;
      this.disableSubmit = true;

      this.registerForm = this.formBuilder.group({
        fullname:['', [Validators.required, Validators.minLength(5),
          Validators.pattern("([a-zA-Z0-9])[a-zA-Z0-9]* ([a-zA-Z0-9])[a-zA-Z0-9., ]*")]],
        email:['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, Validators.minLength(5),
          Validators.pattern("([a-zA-Z])[a-zA-Z0-9]*")]],
        password: ['', [Validators.required, Validators.minLength(5),
          Validators.pattern("([a-zA-Z0-9_-])[a-zA-Z0-9_-]*")]]
      });

    }

//  getter for form fields
 get f() { return this.registerForm.controls; }
 get valid() {return this.registerForm.valid;}

// getters for for form controls by form control name
 get fullname() {return this.registerForm.get('fullname');}
 get username() {return this.registerForm.get('username');}
 get email() {return this.registerForm.get('email');}
 get password() {return this.registerForm.get('password');}

//enter and blur events
public addFullname(fullnameValue: string){
  console.log("in addFullname, fullnameValue= " + fullnameValue)
  if(this.fullname.valid){
    this.specificUserRegistration.fullname = fullnameValue;
  }
}

public addEmail(emailValue: string){
  console.log("in addEmail, emailValue= " + emailValue)
  if(this.email.valid){
    this.specificUserRegistration.email = emailValue;
  }
}

public addUsername(usernameValue: string){
  console.log("in addUsername, usernameValue= " + usernameValue)
  if(this.username.valid){
    this.specificUserRegistration.username = usernameValue;
  }
}

public addPassword(passwordValue: string){
  console.log("in addPassword, passwordValue= " + passwordValue)
  if(this.password.valid){
    this.specificUserRegistration.password = passwordValue;
  }
}

/* infor to the call delete later
api/users/isUnique POST request
{
 "name":"someUserName",
 "email":"somebody@somewhere.com"
}
*/
public isUsernameUnique(usernameValue: string){
  console.log("this.username.valid: " + this.username.valid);
  if(this.username.valid){
    // ask backend if usenname is unique and Valid
    // or perhaps check to see if both username and email are valid
    // then send the request.
    this.specificUserRegistration.username = usernameValue;
  }
  return;
}

/* backend call Example
    private requestLogin(user: string, pw: string): Observable<User>{

      //construct the authorization headers
      let authHeader: string = "Basic " + btoa(`${user}:${pw}`);

      console.log("User: " + user);
      console.log("PW: " + pw);
      console.log("Authorization Header: " + authHeader);


      return this.http.get<User>('http://localhost:8080/api/verifyCredentials',
        {
          headers: new HttpHeaders()
            .set('Authorization', authHeader)
            .append('content-type',"application/json"),
          responseType: 'json'
        }
      );
*/
 errorMessage: string;

 public getErrorMessage(formControlName: string) {

   switch(formControlName){
     case 'fullname':
         this.errorMessage = this.fullname.hasError('required') ? 'You must enter a value' :
         this.fullname.hasError('minlength') ? 'Length must be at least 5 characters' :
         this.fullname.hasError('pattern') ? 'Use letters and with a space between FirstName and LastName' :
         '';
       break;
     case 'email':
       this.errorMessage = this.email.hasError('required') ? 'You must enter a value' :
         this.email.hasError('email') ? 'Not a valid email.' :
         '';
       break;
     case 'username':
       this.errorMessage = this.username.hasError('required') ? 'You must enter a value' :
         this.username.hasError('minlength') ? 'Length must be at least 5 characters' :
         this.username.hasError('pattern') ? 'Use letters, numbers and underscores.' :
         '';
       break;
     case 'password':
       this.errorMessage = this.password.hasError('required') ? 'You must enter a value' :
         this.password.hasError('minlength') ? 'Length must be at least 5 characters' :
         this.password.hasError('pattern') ? 'Use letters, numbers and special characters.' :
         '';
       break;
     default:
            this.errorMessage='';
       break;
     }
     return this.errorMessage;
 }


  // Establish the controls and methods for the submit button


  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Hurrah! Submit button was pressed.");
    console.log("this.registerForm.invalid: " + this.registerForm.invalid);
    if(this.registerForm.invalid) { this.submitted = false; return;}

    alert("In onSubmit: success thus far");
    //TODO: rmove alert add other funtionaliy like call to login.
  }

  cancelRegistration(){
    console.log("Hurrah! Cancel button was pressed.");
    this.registerForm.reset();
    // route to homepage
  }

  // TODO: Remove this when we're done, it is just used to verify data capturing to correct variable
  get diagnostic() { return JSON.stringify(this.specificUserRegistration); }
  get registerFormDiagnostic() { return JSON.stringify(this.registerForm.value); }

}