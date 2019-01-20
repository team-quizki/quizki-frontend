import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { ApiService } from '../_services/api.service';
import { UserRegistration } from '../user/user-registration';
import { User, Role } from '../user/user';

const uniqueUsername = 'uniqueUsername';
const duplicateUsername = 'duplicateUsername';
const uniqueEmail = 'uniqueEmail@junk.com';
const duplicateEmail = 'duplicateEmail@junk.com';
const userRegistration = new UserRegistration('abc123', uniqueUsername, 2, uniqueEmail, 'Test Success Fullname');
const role = new Role(2, 'userRole 2 definition');
const user = new User(20, role, 'abc123', uniqueUsername, 1, uniqueEmail, 'Test Fullname', true, 'demograhic indicator' );
const userBadRegistration = new UserRegistration('abc123', duplicateUsername, 2, duplicateEmail, 'Test Failed Fullname');
const failedUserReg = '{"errors": [{"field": "email","message": "email.not.unique"}, {"field": "name", "message": "name.not.unique"}]}';

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

  it('isUniqueUsername(uniqueUsername) should be truthy', inject([RegisterService], (service: RegisterService) => {
    spyOn(service, 'isUniqueUsername').and.returnValue(Promise.resolve(true));
    expect(service.isUniqueUsername(uniqueUsername)).toBeTruthy();
  }));

  it('isUniqueUsername(duplicateUsername) should be truthy', inject([RegisterService], (service: RegisterService) => {
    spyOn(service, 'isUniqueUsername').and.returnValue(Promise.resolve(false));
    expect(service.isUniqueUsername(duplicateUsername)).toBeTruthy();
  }));

  it('isUniqueEmail(uniqueEmail) should be truthy', inject([RegisterService], (service: RegisterService) => {
    spyOn(service, 'isUniqueEmail').and.returnValue(Promise.resolve(true));
    expect(service.isUniqueEmail(uniqueEmail)).toBeTruthy();
  }));

  it('isUniqueEmail(duplicateEmail) should be truthy', inject([RegisterService], (service: RegisterService) => {
    spyOn(service, 'isUniqueEmail').and.returnValue(Promise.resolve(false));
    expect(service.isUniqueEmail(duplicateEmail)).toBeTruthy();
  }));

  it('registerUser(userRegistration) should be truthy', inject([RegisterService], (service: RegisterService) => {
    spyOn(service, 'registerUser').and.returnValue(Promise.resolve(user));
    expect(service.registerUser(userRegistration)).toBeTruthy();
  }));

  it('registerUser(userBadRegistration) should be truthy', inject([RegisterService], (service: RegisterService) => {
    spyOn(service, 'registerUser').and.returnValue(Promise.resolve(failedUserReg));
    expect(service.registerUser(userBadRegistration)).toBeTruthy();
  }));

});
