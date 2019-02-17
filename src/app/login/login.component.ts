import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service';
import { UserService } from '../_services/user.service';
import { User, Role} from '../user/user';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { CommonFieldControlsService } from '../_services/common-field-controls.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginStatus: string;

  routeOnCloseUrl: string;
  loginForm: FormGroup;

  hidePassword: boolean;

  loginErrorMessage: string;
  loginSubmitted: boolean;

  constructor(
      public commonFCS: CommonFieldControlsService,
      private formBuilder: FormBuilder,
      public loginService: LoginService,
      public userService: UserService,
      public matDialogRef: MatDialogRef<LoginComponent>
    ) {}


  ngOnInit() {

    let currentUser = this.userService.getCurrentUser();
    if( currentUser === undefined){
      this.loginStatus = 'no one logged in';
    } else
    {
      this.loginStatus = currentUser.name + ' is logged in';

      //TODO: remove this line and the next line of code when finished.
      console.log("Hey there DMPJ Coders: " + this.loginStatus + ". What action to we want to take? Allow/Prevent Duplicates? Log the user out? Ask user to logout?")
    }

    this.username = '';
    this.password = '';

    this.hidePassword = true;

    this.loginErrorMessage = '';
    this.loginSubmitted = false;

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  //  getter for form fields
   get f() { return this.loginForm.controls; }
   get valid() { return this.loginForm.valid; }

  // getters for for form controls by form control name
   get usernameFC() { return this.loginForm.get('username'); }
   get passwordFC() { return this.loginForm.get('password'); }


   public isInvalidWithTouchedOrDirtyControl( fcName: string ): boolean {
     return this.loginForm.get(fcName).invalid
        && (this.loginForm.get(fcName).touched || this.loginForm.get(fcName).dirty);
   }

  public getLoginErrorMessage(formControlName: string) {

    switch ( formControlName ) {
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
        this.loginErrorMessage = '';
        break;
      }
      return this.loginErrorMessage;
  }


  private cancelLogin() {
    // consider asking the user for cancel confirmation.
    this.loginForm.reset();

    this.username = '';
    this.password = '';

    this.matDialogRef.close();

  }

  private prepareToTransferToRegistation() {
    // consider asking the user for cancel confirmation.
    this.cancelLogin();
  }

  private onSubmit() {
      if ( this.loginForm.invalid ) { return; } // form should never be invalid at this point.
      this.loginSubmitted = true;

      this.username = this.usernameFC.value;
      this.password = this.passwordFC.value;

      this.login();

  }

  public login() {
    // need to add an error for when login doesn't occure

    // TODO: remove this comment and the next 2 lines of code.
    let checkUser = this.userService.getCurrentUser();
    console.log("in Login(): before requestUserLogin() is executed. getCurrentUser() returns: " + JSON.stringify(checkUser));

    this.loginStatus = 'Requested';
    this.loginService.requestUserLogin(this.username, this.password)
      .subscribe(
        (res: User) => {
          this.loginStatus = `${res.name} Logged In`;
          this.userService.setCurrentUser(res);

          //TODO: remove this coment and the next 2 lines of code.
          let checkUser = this.userService.getCurrentUser();
          console.log("in Login(): after getCurrentUser() returns: " + JSON.stringify(checkUser));

        },
        (error) => {
          this.loginStatus = 'Please correct username and password.';
          this.loginForm.setErrors({'invalid': true});
          this.loginSubmitted = false;
        },
        () => {this.loginForm.reset(); this.matDialogRef.close(); }
      );
  }

  onNoClick(): void {
    this.matDialogRef.close();
  }

}
