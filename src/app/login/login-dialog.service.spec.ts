import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material';

import { LoginDialogService } from './login-dialog.service';
import { LoginComponent } from './login.component';


describe('LoginDialogService', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let matDialogRefStub;
  let matDialogStub;

  beforeEach(() => {
    matDialogRefStub = jasmine.createSpyObj('loginMatDialogRefStub', ['matDialogRef'] );
    matDialogStub = jasmine.createSpyObj('loginMatDialogStub', ['matDialog'] );

    TestBed.configureTestingModule({
      providers: [
        { provide: LoginDialogService, useClass: LoginDialogService },
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MatDialog, useValue: matDialogStub }
      ],
      imports: [ BrowserAnimationsModule ]
    });
  });

  it('should be created', inject([LoginDialogService], (service: LoginDialogService) => {
    expect(service).toBeTruthy();
  }));

});
