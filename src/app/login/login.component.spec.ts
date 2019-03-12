import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MatDialogRef } from '@angular/material';

import { HttpClient } from '@angular/common/http';
import {
         MatCardModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule
        } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

//import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let cancelButtonElement: DebugElement;
  let loginButtonElement; DebugElement;
  let dialogRefStub;

  beforeEach(async(() => {
    dialogRefStub = jasmine.createSpyObj('loginDialogRefStub', ['dialogRef'] );

    TestBed.configureTestingModule({
      imports : [ ReactiveFormsModule, BrowserAnimationsModule,
        MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefStub },
        { provide: LoginService, useValue: { requestUserLogin: jasmine.createSpy('requestUserLogin')}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setting loginSubmitted to false disables the login button', () => {
    loginButtonElement = fixture.debugElement.query(By.css('#login_button'));
    component.loginSubmitted = false;
    fixture.detectChanges();
    expect(loginButtonElement.nativeElement.disabled).toBeTruthy();
  });

  it('setting loginForm.invalid to true disables the login button', () => {
    loginButtonElement = fixture.debugElement.query(By.css('#login_button'));
    component.loginForm.setErrors({'invalid': true});
    fixture.detectChanges();
    expect(loginButtonElement.nativeElement.disabled).toBeTruthy();
  });

  it('setting loginSubmitted to true and loginForm is valid enables the login button', () => {
    loginButtonElement = fixture.debugElement.query(By.css('#login_button'));
    component.loginSubmitted = true;
    component.loginForm.enable();
    fixture.detectChanges();
    expect(loginButtonElement.nativeElement.disabled).toBeTruthy();
  });

  it('clicking cancel button should cancel login', fakeAsync( () => {
    cancelButtonElement = fixture.debugElement.query(By.css('#cancel_button'));
    spyOn(component, 'cancelLogin'); //method attached to the click.
    cancelButtonElement.triggerEventHandler('click', null);
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    fixture.detectChanges();
    expect(component.cancelLogin).toHaveBeenCalled();
  }));

  it('should validate username field is required', () => {
    let errors = {};
    let usernameFormControl = component.loginForm.get('username');
    errors = usernameFormControl.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should validate username field value contains at least 5 characters', () => {
    let errors = {};
    let usernameFormControl = component.loginForm.get('username');
    usernameFormControl.setValue("test");
    errors = usernameFormControl.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('should validate password field is required', () => {
    let errors = {};
    let passwordFormControl = component.loginForm.get('password');
    errors = passwordFormControl.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should validate password field value contains at least 5 characters', () => {
    let errors = {};
    let passwordFormControl = component.loginForm.get('password');
    passwordFormControl.setValue("abc");
    errors = passwordFormControl.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

});
