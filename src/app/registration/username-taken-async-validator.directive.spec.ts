import { UsernameTakenAsyncValidatorDirective } from './username-taken-async-validator.directive';
import { async, TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';

describe('UsernameTakenAsyncValidatorDirective', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UsernameTakenAsyncValidatorDirective, useValue: { validate: jasmine.createSpy('validate') }},
        { provide: RegisterService, useValue: { isUniqueName: jasmine.createSpy('isUniqueName') }},
      ]
    })
    .compileComponents();
  }));

  it('should create an instance', () => {
    let registerService: RegisterService;
    const directive = new UsernameTakenAsyncValidatorDirective(registerService);
    expect(directive).toBeTruthy();
  });

});
