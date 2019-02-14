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
import { LoginDialogHostComponent } from '../login-dialog-host/login-dialog-host.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let apiServiceSpyObj;

  beforeEach(async(() => {
    apiServiceSpyObj = jasmine.createSpyObj('apiService', ['post']);

    TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [ MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule ],
      providers: [
        { provide: RegisterService, useValue: { isUniqueName: jasmine.createSpy('isUniqueName') }},
        { provide: ApiService, useValue: apiServiceSpyObj},
        { provide: LoginDialogHostComponent, useValue: { openLoginDialog: jasmine.createSpy('openLoginDialog') }}
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
});
