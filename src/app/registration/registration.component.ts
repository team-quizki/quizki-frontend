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

      // don't forget to add all the special characters to the password pattern
      // email validator still allows someEmail@somewhere because that is a valid emailValue
      // according to the documentation. reseach further later.
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
 get fullnameFC() {return this.registerForm.get('fullname');}
 get usernameFC() {return this.registerForm.get('username');}
 get emailFC() {return this.registerForm.get('email');}
 get passwordFC() {return this.registerForm.get('password');}

//methods used for enter key up and blur events
public addFullname(fullnameValue: string){
  if(this.fullnameFC.valid){
    this.specificUserRegistration.fullname = fullnameValue;
  }
}

public addEmail(emailValue: string){
  if(this.emailFC.valid){
    this.specificUserRegistration.email = emailValue;
  }
}

public addUsernameFC(usernameValue: string){
  if(this.usernameFC.valid){
    this.specificUserRegistration.username = usernameValue;
  }
}

public addPassword(passwordValue: string){
  if(this.passwordFC.valid){
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

// the following method will be revisited after
// cross field valdiation for the email and username is implemented
public isUsernameUnique(usernameValue: string){
  console.log("this.usernameFC.valid: " + this.usernameFC.valid);
  if(this.usernameFC.valid){
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

// need to change getErrorMessage, so any form can use it.
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
       this.errorMessage = this.emailFC.hasError('required') ? 'You must enter a value' :
         this.emailFC.hasError('email') ? 'Not a valid email.' :
         '';
       break;
     case 'username':
       this.errorMessage = this.usernameFC.hasError('required') ? 'You must enter a value' :
         this.usernameFC.hasError('minlength') ? 'Length must be at least 5 characters' :
         this.usernameFC.hasError('pattern') ? 'Use letters, numbers and underscores.' :
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
    if(this.registerForm.invalid) { return;} // should never be invalid at this point...

    alert("In onSubmit: success thus far");

    //TODO: rmove alert add other funtionaliy like:
    // call to backend to created registration and send to login.
    // perhaps route to login on the buttong after the registration completes
    // successfully

  }

  public cancelRegistration(){
    // consider asking the user for cancel confirmation.
    // really should write a reset method for UserRegistration
    this.registerForm.reset();
    this.specificUserRegistration.fullname = '';
    this.specificUserRegistration.username = '';
    this.specificUserRegistration.password = '';
    this.specificUserRegistration.email = '';
    // routed to homepage is done on the button. of course eventually,
    // routing should be back page the user was on orginially ...
  }

  // TODO: Remove these when done, it is just used to verify data capturing to correct variable
  get diagnostic() { return JSON.stringify(this.specificUserRegistration); }
  get registerFormDiagnostic() { return JSON.stringify(this.registerForm.value); }

}
