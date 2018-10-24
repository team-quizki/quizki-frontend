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

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, BrowserAnimationsModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule ],
      declarations: [NavigationComponent],
      providers: [{
        provide: NavigationService,
        useValue: {
          setPageTitle: jasmine.createSpy('setPageTitle')
        }
      }]
//      providers: [{
//          provide: Router, 
//          useValue: {
//            navigate: jasmine.createSpy('navigate')
//          }
//        }
//      ]
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
