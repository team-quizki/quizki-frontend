import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { UserRegistration } from './../user/user-registration';

// define UserRoles interface
export interface UserRoles {
  id: string;
  name: string;
}

// define UserDemographics interface
export interface UserDemographics {
  id: string;
  name: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  specificUserRegistration = new UserRegistration(0,'','',false,'','','');
    /* recall that the fields in UserRegistration are as follows.
        public id: number,
        public password: string,
        public name: string,
        public enabled : boolean,
        public role: string,
        public email: string,
        public fullname: string,
        public demographic?: string
    */

    constructor() {
     // setting this is the key to initial select.
     this.specificUserRegistration.role= '0';
     this.specificUserRegistration.demographic = '0';
    }

    ngOnInit() {
    }

// consider moving email to a serve as it will be need for login
    hidePassword = true;

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
      return this.emailFormControl.hasError('required') ? 'You must enter a value' :
        this.emailFormControl.hasError('email') ? 'Not a valid email' :
              '';
    }

  // define the valid UserDemographics until another solution surfaces.
  listOfDemographics : UserDemographics [] = [
      { id:'0',  name:'None'},
      { id:'1',  name:'Student'},
      { id:'2',  name:'Teacher'},
      { id:'3',  name:'Independant'},
      { id:'4',  name:'Other'}
    ];

  // define the valid UserRoles until another solution surfaces.
  listOfUserRoles : UserRoles [] = [
    { id: '0', name: 'User'},
    { id: '1', name: 'Admin'}
  ];

  // has the form been submitted?
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Hurrah! Submit button was pressed.");
  }

  // TODO: Remove this when we're done, it is just used to verify data capturing to correct variable
  get diagnostic() { return JSON.stringify(this.specificUserRegistration); }

}
