import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogHostComponent } from './login-dialog-host.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



describe('LoginDialogHostComponent', () => {
  let component: LoginDialogHostComponent;
  let fixture: ComponentFixture<LoginDialogHostComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginDialogHostComponent ],
      imports: [
        MatDialog,
        Router,
        Subject
      ],
      providers: [
        //{ provide: LoginDialogHostService, useValue: { routeToUrl: routeToUrlSpyObj, setRouteOnCloseToUrl: setRouteOnCloseToUrlSpyObj }}
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
