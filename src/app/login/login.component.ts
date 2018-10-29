import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service'
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
  loginSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
      private loginService: LoginService) { }

  ngOnInit() {
    this.loginStatus = "Logged Out";
    this.username = '';
    this.password = '';

    this.hidePassword = true;
    this.loginErrorMessage = "";
    this.loginSubmitted = false;

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

    // consider writing a reset function.
    this.username = "";
    this.password = "";
    // routed to homepage is done on the button. of course eventually,
    // routing should be back page the user was on orginially ...
  }

  private onSubmit() {
      if(this.loginForm.invalid) { return;} // form should never be invalid at this point.
      this.loginSubmitted = true;

      this.username = this.usernameFC.value;
      // need to encrypt password???
      this.password = this.passwordFC.value;

      if(this.login()){
          this.loginSubmitted = false;
          this.loginForm.reset();
          // send to requested page
        }
  }

  public login(){
    // need to add an error for when login doesn't occure
    this.loginStatus = "Requested"
    this.loginService.requestUserLogin(this.username, this.password)
      .subscribe((res: User) => {
        console.log("in login res= " + JSON.stringify(res));
        this.loginStatus = `${res.name} Logged In`;
      });

  }

  // TODO: Remove these when done, it is just used to verify data capturing to correct variable
  get loginFormDiagnostic() { return JSON.stringify(this.loginForm.value); }

}
