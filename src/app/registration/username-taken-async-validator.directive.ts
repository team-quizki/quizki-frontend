import { Directive } from '@angular/core';
import { RegisterService } from './register.service';
import { AbstractControl, ValidationErrors, AsyncValidatorFn, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

export function usernameTakenAsycValidator(registerService: RegisterService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return registerService.isUniqueUsername(control.value).pipe(
      map((res) => {
        return res.name ? null : { usernameTaken: true };
      }),
      catchError(() => null)
    );
  };
}

@Directive({
  selector: '[appUsernameTakenAsyncValidator, usernameTaken]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UsernameTakenAsyncValidatorDirective, multi: true}]
})
export class UsernameTakenAsyncValidatorDirective {

  constructor( private registerService: RegisterService ) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return usernameTakenAsycValidator (this.registerService)(control);
  }

}
