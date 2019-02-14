import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { ApiService } from '../_services/api.service';
import { User, Role } from '../user/user';

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

  it('isUniqueUsername should have truthy apiService.post with returnValue true', inject([RegisterService, ApiService],
    (registerService: RegisterService, apiService: ApiService) => {

    apiService.post = jasmine.createSpy().and.returnValue(true);
    expect(apiService.post).toBeTruthy();

  }));

  it('isUniqueUsername should have truthy apiService.post with returnValue false', inject([RegisterService, ApiService],
    (registerService: RegisterService, apiService: ApiService) => {

    apiService.post = jasmine.createSpy().and.returnValue(false);
    expect(apiService.post).toBeTruthy();

  }));

  it('isUniqueEmail should have truthy apiService.post with returnValue true', inject([RegisterService, ApiService],
    (registerService: RegisterService, apiService: ApiService) => {

    apiService.post = jasmine.createSpy().and.returnValue(true);
    expect(apiService.post).toBeTruthy();

  }));

  it('isUniqueEmail should have truthy apiService.post with returnValue false', inject([RegisterService, ApiService],
    (registerService: RegisterService, apiService: ApiService) => {

    apiService.post = jasmine.createSpy().and.returnValue(false);
    expect(apiService.post).toBeTruthy();

  }));

  it('registerUser should have truthy apiService.post with returnValue user', inject([RegisterService, ApiService],
    (registerService: RegisterService, apiService: ApiService) => {

    const role = new Role(2, 'userRole 2 definition');
    const user = new User(20, role, 'abc123', 'uniqueUsername', 1, 'uniqueEmail', 'Test Fullname', true, 'demograhic indicator' );

    apiService.post = jasmine.createSpy().and.returnValue(user);
    expect(apiService.post).toBeTruthy();

  }));

  it('registerUser should have truthy apiService.post with returnValue failedUserReg', inject([RegisterService, ApiService],
    (registerService: RegisterService, apiService: ApiService) => {

    const failedUserReg = '{"errors": [{"field": "email","message": "email.not.unique"}, {"field": "name", "message": "name.not.unique"}]}';

    apiService.post = jasmine.createSpy().and.returnValue(failedUserReg);
    expect(apiService.post).toBeTruthy();

  }));

  afterEach(() => {
    // nothing to clean up???
  });


});
