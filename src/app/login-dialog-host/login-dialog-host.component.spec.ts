import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogHostComponent } from './login-dialog-host.component';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
//import { Subject } from 'rxjs';



describe('LoginDialogHostComponent', () => {
  let component: LoginDialogHostComponent;
  let fixture: ComponentFixture<LoginDialogHostComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginDialogHostComponent ],
      imports: [
        MatDialogModule ,
        RouterTestingModule//,
        //Subject
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
