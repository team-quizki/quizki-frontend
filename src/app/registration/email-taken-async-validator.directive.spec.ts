import { EmailTakenAsyncValidatorDirective } from './email-taken-async-validator.directive';
import { async, TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';

describe('EmailTakenAsyncValidatorDirective', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      providers: [
        { provide: EmailTakenAsyncValidatorDirective, useValue: { validate: jasmine.createSpy('validate') }},
        { provide: RegisterService, useValue: { isUniqueName: jasmine.createSpy('isUniqueName') }}
      ]
    })
    .compileComponents();
  }));

  it('should create an instance', () => {
    let registerService: RegisterService;
    const directive = new EmailTakenAsyncValidatorDirective(registerService);
    expect(directive).toBeTruthy();
  });

});
