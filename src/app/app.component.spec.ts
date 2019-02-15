import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import {
          MatIconModule,
          MatListModule,
          MatSidenavModule,
          MatToolbarModule,
        } from '@angular/material';

import { RouterTestingModule } from '@angular/router/testing';

import { NavigationComponent } from './navigation/navigation.component';
import { NavigationService } from './navigation.service';
import { LoginDialogHostComponent } from './login-dialog-host/login-dialog-host.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, BrowserAnimationsModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule
      ],
      declarations: [
        AppComponent, NavigationComponent
      ],
      providers: [{
          provide: NavigationService,
          useValue: {
            setPageTitle: jasmine.createSpy('setPageTitle')
          }
        },
        {
            provide: LoginDialogHostComponent,
            useValue: {
              openLoginDialog: jasmine.createSpy('openLoginDialog')
            }
          }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`#AppComponent should have as title 'Quizki'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Quizki');
  });

});
