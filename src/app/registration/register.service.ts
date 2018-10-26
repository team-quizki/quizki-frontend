import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
//import { AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';

import { ApiService } from '../_services/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { map, catchError } from '../../../node_modules/rxjs/operators';

@Injectable()
export class RegisterService {

  constructor( private apiService: ApiService) { }

  isUniqueUsername( name: string ) : Observable<any>
  {
    let isUniqueUrl = '/api/users/isUnique';

    return this.apiService
      .post(isUniqueUrl, {name: name });
  }

}

export class ValidateUsernameNotTaken {
  static createValidator(registerService: RegisterService) {
    return (control: AbstractControl) => {
      return registerService.isUniqueUsername(control.value).pipe(
        map((res) =>
        {
          //console.log(JSON.stringify(res));
          return res.name ? null : { usernameTaken: true };
        }),
        catchError(() => null)
      )
    };
  }
}