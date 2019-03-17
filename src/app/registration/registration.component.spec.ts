import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
          MatCardModule,
          MatFormFieldModule,
          MatIconModule,
          MatInputModule
        } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';

import { RegisterService } from './register.service';
import { ApiService } from '../_services/api.service';
import { RegistrationComponent } from './registration.component';
import { LoginDialogService } from '../login/login-dialog.service';
import { emailTakenAsycValidator, EmailTakenAsyncValidatorDirective } from './email-taken-async-validator.directive';
import { usernameTakenAsycValidator, UsernameTakenAsyncValidatorDirective } from './username-taken-async-validator.directive';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let apiServiceSpyObj;

  beforeEach(async(() => {
    apiServiceSpyObj = jasmine.createSpyObj('apiService', ['post']);

    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [ MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule ],
      providers: [ //emailTakenAsycValidator,
        { provide: emailTakenAsycValidator, useValue: jasmine.createSpy('emailTakenAsycValidator') },
        { provide: EmailTakenAsyncValidatorDirective, useValue: { validate: jasmine.createSpy('validate') }},
        { provide: usernameTakenAsycValidator, useValue: { validate: jasmine.createSpy('usernameTakenAsycValidator') }},
        { provide: UsernameTakenAsyncValidatorDirective, useValue: { validate: jasmine.createSpy('validate') }},
        { provide: RegisterService, useValue: {  isUniqueEmail: jasmine.createSpy('isUniqueEmail'), isUniqueUsername: jasmine.createSpy('isUniqueUsername') }},
        { provide: ApiService, useValue: apiServiceSpyObj},
        { provide: LoginDialogService, useValue: { openLoginDialog: jasmine.createSpy('openLoginDialog') }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // the following fullname field tests are to verify validaters required minlength pattern work

  it('should validate required fullname field value is present ', () => {
    let errors = {};
    let fullnameFormControl = component.registerForm.get('fullname');
    fullnameFormControl.setValue('Firstname Lastname');
    errors = fullnameFormControl.errors || {};
    expect(errors['required']).toBeUndefined(); // no errors
  });

  it('should validate required fullname field value is missing ', () => {
    let errors = {};
    let fullnameFormControl = component.registerForm.get('fullname');
    fullnameFormControl.reset();
    errors = fullnameFormControl.errors || {};
    expect(errors['required']).toBeTruthy(); // has errors
  });

  it('should validate fullname field value contains at least 5 characters', () => {
    let errors = {};
    let fullnameFormControl = component.registerForm.get('fullname');
    fullnameFormControl.setValue("test");
    errors = fullnameFormControl.errors || {};
    expect(errors['minlength']).toBeTruthy(); // has errors
  });

  it('should validate fullname field value may contains 5 or more characters', () => {
    let errors = {};
    let fullnameFormControl = component.registerForm.get('fullname');
    fullnameFormControl.setValue("testing");
    errors = fullnameFormControl.errors || {};
    expect(errors['minlength']).toBeUndefined(); //no errors
  });

  it('should validate fullname field value is well formed (i.e., firstname space lastname)', () => {
    let errors = {};
    let fullnameFormControl = component.registerForm.get('fullname');
    fullnameFormControl.setValue("Firstname Lastname");
    errors = fullnameFormControl.errors || {};
    expect(errors['pattern']).toBeUndefined(); // no error
  });

  it('should validate fullname field value is badly formed (i.e., firstname noSpace lastname)', () => {
    let errors = {};
    let fullnameFormControl = component.registerForm.get('fullname');
    fullnameFormControl.setValue("FirstnameNoSpaceLastname");
    errors = fullnameFormControl.errors || {};
    expect(errors['pattern']).toBeTruthy(); // has errors
  });

  // the following email field tests are to verify validaters email required and asyncValidator emailTaken work

  it('should validate required email field value is present ', () => {
    let errors = {};
    let emailFormControl = component.registerForm.get('fullname');
    emailFormControl.setValue('Firstname Lastname');
    errors = emailFormControl.errors || {};
    expect(errors['required']).toBeUndefined(); // no errors
  });

  it('should validate required email field value is missing ', () => {
    let errors = {};
    let emailFormControl = component.registerForm.get('email');
    emailFormControl.reset();
    errors = emailFormControl.errors || {};
    expect(errors['required']).toBeTruthy(); // has errors
  });

  it('should validate email field value is a well formed email address  ', () => {
    let errors = {};
    let emailFormControl = component.registerForm.get('username');
    emailFormControl.setValue('goodEmail@somewhere.com');
    errors = emailFormControl.errors || {};
    expect(errors['email']).toBeUndefined(); // no errors
  });

  it('should validate email field value is and invalid, poorly formed email address  ', () => {
    let errors = {};
    let emailFormControl = component.registerForm.get('username');
    emailFormControl.setValue('badEmail@');
    errors = emailFormControl.errors || {};
    expect(errors['email']).toBeUndefined(); // has errors
  });

  // NOTE: the following 2 tests we cannot use emailFormControl.setValue('goodEmail@somewhere.com');
  // because setting the value to a good meial will cause the emailTakenAsycValidator funtion to execute
  it('should validate email field validator emailTaken to be truthy when emailTaken=true', () => {
    let errors = {};
    let emailFormControl = component.registerForm.get('email');
    emailFormControl.setErrors({'emailTaken': true});
    errors = emailFormControl.errors || {};
    expect(errors['emailTaken']).toBeTruthy(); // has an error when truthy
  });

  it('should validate email field validator emailTaken works when emailTaken=null', () => {
    let errors = {};
    let emailFormControl = component.registerForm.get('email');
    emailFormControl.setErrors({'emailTaken': null});
    errors = emailFormControl.errors || {};
    expect(errors['emailTaken']).toBeNull(); // no errors
  });

  // the following username field tests are to veryify validaters required minlength pattern and asyncValidator usernameTaken work

  it('should validate required username field value is present ', () => {
    let errors = {};
    let usernameFormControl = component.registerForm.get('username');
    usernameFormControl.setValue('Firstname Lastname');
    errors = usernameFormControl.errors || {};
    expect(errors['required']).toBeUndefined(); // no errors
  });

  it('should validate required username field is missing ', () => {
    let errors = {};
    let usernameFormControl = component.registerForm.get('username');
    usernameFormControl.reset();
    errors = usernameFormControl.errors || {};
    expect(errors['required']).toBeTruthy(); // has errors
  });

  it('should validate username field value contains at least 5 characters', () => {
    let errors = {};
    let usernameFormControl = component.registerForm.get('username');
    usernameFormControl.setValue("test");
    errors = usernameFormControl.errors || {};
    expect(errors['minlength']).toBeTruthy(); // has errors
  });

  // NOTE: the following 2 tests we cannot use usernameFormControl.setValue('aGoodUsername');
  // because setting the value to a well formed username will cause the usernameTakenAsycValidator funtion to execute

  it('should validate username validator usernameTaken to be truthy when usernameTaken=true', () => {
    let errors = {};
    let usernameFormControl = component.registerForm.get('username');
    usernameFormControl.setErrors({'usernameTaken': true});
    errors = usernameFormControl.errors || {};
    expect(errors['usernameTaken']).toBeTruthy(); // has an error when truthy
  });

  it('should validate username field validator usernameTaken works when usernameTaken=null', () => {
    let errors = {};
    let usernameFormControl = component.registerForm.get('username');
    usernameFormControl.setErrors({'usernameTaken': null});
    errors = usernameFormControl.errors || {};
    expect(errors['usernameTaken']).toBeNull(); // no errors
  });

  // the following password test are to verify validaters required minlength pattern work

  it('should validate required password field value is present ', () => {
    let errors = {};
    let passwordFormControl = component.registerForm.get('password');
    passwordFormControl.setValue('Firstname Lastname');
    errors = passwordFormControl.errors || {};
    expect(errors['required']).toBeUndefined(); // no errors
  });

  it('should validate required password field value is missing ', () => {
    let errors = {};
    let passwordFormControl = component.registerForm.get('password');
    passwordFormControl.reset();
    errors = passwordFormControl.errors || {};
    expect(errors['required']).toBeTruthy(); // has errors
  });

  it('should validate password field value contains at least 5 characters', () => {
    let errors = {};
    let passwordFormControl = component.registerForm.get('password');
    passwordFormControl.setValue("test");
    errors = passwordFormControl.errors || {};
    expect(errors['minlength']).toBeTruthy(); // has errors
  });

  it('should validate password field value may contain more than 5 characters', () => {
    let errors = {};
    let passwordFormControl = component.registerForm.get('password');
    passwordFormControl.setValue("testing");
    errors = passwordFormControl.errors || {};
    expect(errors['minlength']).toBeUndefined(); //no errors
  });

  it('should validate password field value contains a well formed password (i.e.,uses letters numbers underscore or dash)', () => {
    let errors = {};
    let passwordFormControl = component.registerForm.get('password');
    passwordFormControl.setValue("aValidPassord_Test");
    errors = passwordFormControl.errors || {};
    expect(errors['pattern']).toBeUndefined(); // no error
  });

  it('should validate password field value contains a poorly formed password  (i.e.,uses any special character other than underscore or dash )', () => {
    let errors = {};
    let passwordFormControl = component.registerForm.get('password');
    passwordFormControl.setValue("AnInValidPassord:_Test");
    errors = passwordFormControl.errors || {};
    expect(errors['pattern']).toBeTruthy(); // has errors
  });

});
