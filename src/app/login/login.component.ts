import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import {User} from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginStatus: string;
  user: User;

  loginForm: FormGroup;

  hidePassword: boolean;
  loginErrorMessage: string;

  constructor(private http: HttpClient,
      private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginStatus = "Logged Out";
    this.username = '';
    this.password = '';

    this.hidePassword = true;
    this.loginErrorMessage = "";

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  //  getter for form fields
   get f() { return this.loginForm.controls; }
   get valid() {return this.loginForm.valid;}

  // getters for for form controls by form control name
   get usernameFC() {return this.loginForm.get('username');}
   get passwordFC() {return this.loginForm.get('password');}

   public addUsername(usernameValue: string){
     if(this.usernameFC.valid){
       // taked some action here.
       this.username = usernameValue;
     }
   }

   public addPassword(passwordValue: string){
     if(this.passwordFC.valid){
       // take some action here
       this.password = passwordValue;
     }
   }

  // need to change getErromMessage, so any form can use it.
  // yet solution works for the near term.
  public getLoginErrorMessage(formControlName: string) {

    switch(formControlName){
      case 'username':
        this.loginErrorMessage = this.usernameFC.hasError('required') ? 'You must enter a value' :
          this.usernameFC.hasError('minlength') ? 'Username is too short.' :
          '';
        break;
      case 'password':
        this.loginErrorMessage = this.passwordFC.hasError('required') ? 'You must enter a value' :
          this.passwordFC.hasError('minlength') ? 'Password is too short.' :
          '';
        break;
      default:
        this.loginErrorMessage='';
        break;
      }
      return this.loginErrorMessage;
  }

  private cancelLogin(){
    // consider asking the user for cancel confirmation.
    this.loginForm.reset();
    this.username = "";
    this.password = "";
    // routed to homepage is done on the button. of course eventually,
    // routing should be back page the user was on orginially ...
  }
  private onSubmit() {
      if(this.loginForm.invalid) { return;} // form should never be invalid at this point.
      if(this.login()){
          this.loginForm.reset();
          // send to requested page
        }
  }

  public login(){
    //alert("In login() for Login: success thus far");

    console.log("Login: Username: " + this.username + " Password: " + this.password);
    this.loginStatus = "Requested"
    this.requestLogin(this.username, this.password).subscribe((res: User) => {
      console.log("Login User: " + res.name);
      this.loginStatus = `${res.name} Logged In`;
    });

  }


  private requestLogin(user: string, pw: string): Observable<User>{

    //construct the authorization headers
    let authHeader: string = "Basic " + btoa(`${user}:${pw}`);

    console.log("User: " + user);
    console.log("PW: " + pw);
    /*this doesn't work!!!
    authHeader.concat( user);
    authHeader.concat( ":");
    authHeader.concat( pw);
    */
    console.log("Authorization Header: " + authHeader);


    return this.http.get<User>('http://localhost:8080/api/verifyCredentials',
      {
        headers: new HttpHeaders()
          .set('Authorization', authHeader)
          .append('content-type',"application/json"),
        responseType: 'json'
      }
    );

  }

  // TODO: Remove these when done, it is just used to verify data capturing to correct variable
  get loginFormDiagnostic() { return JSON.stringify(this.loginForm.value); }


}
