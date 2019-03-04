import { TestBed, inject } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginService } from './login.service';
import { ApiService } from '../_services/api.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LoginService, useClass: LoginService },
        { provide: ApiService, useValue: { post: jasmine.createSpy('post') }},
      ],
      imports: [ BrowserAnimationsModule ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
