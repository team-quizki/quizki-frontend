import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginDialogHostComponent } from './login-dialog-host.component';
import { MatDialogModule } from '@angular/material';

describe('LoginDialogHostComponent', () => {
  let component: LoginDialogHostComponent;
  let fixture: ComponentFixture<LoginDialogHostComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginDialogHostComponent ],
      imports: [
        MatDialogModule ,
        BrowserAnimationsModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
