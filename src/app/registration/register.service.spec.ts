import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { ApiService } from '../_services/api.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
      	{ provide: RegisterService, useClass: RegisterService },
		    { provide: ApiService, useValue: { post: jasmine.createSpy('post') }},
       ]
    });
  });

  it('should be created', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
