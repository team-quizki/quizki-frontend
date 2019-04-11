import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
         MatIconModule,
         MatListModule,
         MatSidenavModule,
         MatToolbarModule
        } from '@angular/material';

import { NavigationComponent } from './navigation.component';
import { NavigationService } from '../navigation.service';

//import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'
import { LoginDialogService } from '../login/login-dialog.service';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, BrowserAnimationsModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule ],
      declarations: [NavigationComponent],
      providers: [
        {
          provide: NavigationService,
          useValue: {
            setPageTitle: jasmine.createSpy('setPageTitle')
          }
        },
        {
          provide: LoginDialogService,
          useValue: {
            openLoginDialog: jasmine.createSpy('openLoginDialog')
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
