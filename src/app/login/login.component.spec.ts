import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { 
         MatCardModule,
         MatFormFieldModule,
         MatIconModule,
         MatInputModule
        } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ ReactiveFormsModule, BrowserAnimationsModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule ],
      declarations: [ LoginComponent ],
      providers: [{ provide: HttpClient, useValue: { get: jasmine.createSpy('get')}}]
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
