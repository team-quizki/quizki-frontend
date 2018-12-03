import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { LoginService } from './login.service'
import { User, Roles} from '../user/user';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LoginDialogHostService } from '../login-dialog-host/login-dialog-host.service';
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
  roles = new Roles(0,"");
  user = new User(0,this.roles,"","",1,"","",false);

  routeOnCloseUrl: string;
  loginForm: FormGroup;

  hidePassword: boolean;

  loginErrorMessage: string;
  loginSubmitted: boolean;

  constructor(
      public commonFCS: CommonFieldControlsService,
      public loginDHS:LoginDialogHostService,
      private formBuilder: FormBuilder,
      private loginService: LoginService,
      public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        //console.log('Injected data: ', data)
    }

  ngOnInit() {
    this.loginStatus = "Logged Out";
    this.username = '';
    this.password = '';
    this.loginDHS.setRouteOnCloseToUrl('/home-page');

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


   public isInvalidWithTouchedOrDirtyControl(fcName:string):boolean {
     return this.loginForm.get(fcName).invalid
        && (this.loginForm.get(fcName).touched || this.loginForm.get(fcName).dirty);
   }

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

    this.dialogRef.close();

  }

  private prepareToTransferToRegistation(){
    // consider asking the user for cancel confirmation.
    this.loginDHS.setRouteOnCloseToUrl('/registration');
    this.cancelLogin()
  }

  private onSubmit() {
      if(this.loginForm.invalid) { return;} // form should never be invalid at this point.
      this.loginSubmitted = true;

      this.username = this.usernameFC.value;
      this.password = this.passwordFC.value;

      if(this.login()){
        this.dialogRef.close(); // not sure this ever gets executed
      }

  }

  public login(){
    // need to add an error for when login doesn't occure
    this.loginStatus = "Requested";
    this.loginService.requestUserLogin(this.username, this.password)
      .subscribe(
        (res: User) => {
          this.loginStatus = `${res.name} Logged In`;
          this.user.loggedInNow();
        },
        (error) => {
          this.loginStatus = "Please correct username and password.";
          this.loginForm.setErrors({'invalid': true});
          this.loginSubmitted = false;
        },
        () => {this.loginForm.reset(); this.dialogRef.close() }
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
