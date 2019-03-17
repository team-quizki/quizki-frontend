import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors, AsyncValidator, AsyncValidatorFn } from '@angular/forms';
import { RegisterService } from './register.service';
import { map, catchError } from '../../../node_modules/rxjs/operators';
import { Observable } from 'rxjs';

export function emailTakenAsycValidator(registerService: RegisterService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return registerService.isUniqueEmail(control.value).pipe(
      map((res) => {
        return res.email ? null : { emailTaken: true };
      }),
      catchError(() => null)
    );
  };
}

@Directive({
  selector: '[appEmailTakenAsyncValidator, emailTaken]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: EmailTakenAsyncValidatorDirective, multi: true}]

})
export class EmailTakenAsyncValidatorDirective implements AsyncValidator {

  constructor( private registerService: RegisterService ) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return emailTakenAsycValidator (this.registerService)(control);
  }
  
}
