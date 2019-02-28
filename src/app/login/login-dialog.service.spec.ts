import { TestBed, inject } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { LoginDialogService } from './login-dialog.service';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import {  ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const TEST_DIRECTIVES = [
  LoginComponent
];

@NgModule({
  imports: [MatDialogModule, NoopAnimationsModule, MatCardModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, HttpClientModule, HttpClientTestingModule ],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [
    LoginComponent
  ],
})
class DialogTestModule { }

describe('LoginDialogService', () => {

  let matDialog: MatDialog
  let overlayContainerElement: HTMLElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        { provide: LoginDialogService, useClass: LoginDialogService },
        { provide: OverlayContainer, useFactory: () => {
          overlayContainerElement = document.createElement('div');
          return { getContainerElement: () => overlayContainerElement };
        }},
        {provide: ApiService, useClass: ApiService}
      ],
      imports: [ DialogTestModule ]
    });

     matDialog = TestBed.get(MatDialog);
  });

  it('shows login button is present', () => {
    matDialog.open(LoginComponent);
    const loginButton = overlayContainerElement.querySelector('#login_button');

    expect(loginButton.textContent).toBe('Login ')
  });

  it('shows cancel button is present', () => {
    matDialog.open(LoginComponent);
    const cancelButton = overlayContainerElement.querySelector('#cancel_button');

    expect(cancelButton.textContent).toBe('Cancel ')
  });

  it('should be created', inject([LoginDialogService], (service: LoginDialogService) => {
    expect(service).toBeTruthy();
  }));

});
