import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
import { ApiService } from '../_services/api.service';

import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import {User, Roles} from '../user/user';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let apiServiceSpyObj = undefined;
  let dialogRefStub = undefined;
  let dialogDataStub = undefined;

  beforeEach(async(() => {
    apiServiceSpyObj = jasmine.createSpyObj('apiService', ['get'])

    dialogDataStub = jasmine.createSpyObj('loginDialogDataStub',['dialogData'])
    dialogRefStub = jasmine.createSpyObj('loginDialogRefStub', ['dialogRef'] )

    TestBed.configureTestingModule({
      imports : [ ReactiveFormsModule, BrowserAnimationsModule,
        MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
        MatDialogModule],
      declarations: [ LoginComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: dialogDataStub },
        { provide: MatDialogRef, useValue: dialogRefStub },
        { provide: LoginService, useValue: { requestUserLogin: jasmine.createSpy('get')}},
        { provide: ApiService, useValue: apiServiceSpyObj}
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
});
