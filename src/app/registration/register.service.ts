import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
//import { AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';

import { ApiService } from '../_services/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { map, catchError } from '../../../node_modules/rxjs/operators';

import { UserRegistration } from './../user/user-registration';

@Injectable()
export class RegisterService {

  constructor( private apiService: ApiService) { }

  // methods for checking if username and email address are unique
  isUniqueUsername( name: string ) : Observable<any>
  {
    let isUniqueUrl = '/api/users/isUnique';

    return this.apiService
      .post(isUniqueUrl, {name: name });
  }

  isUniqueEmail( email: string ) : Observable<any>
  {
    let isUniqueUrl = '/api/users/isUnique';

    return this.apiService
      .post(isUniqueUrl, {email: email });
  }

  // method for creating a new user on the backend
  registerUser( userRegistration: UserRegistration ) : Observable<any>
  {
    let apiUsersUrl = '/api/users';
    return this.apiService
      .post(apiUsersUrl, JSON.stringify(userRegistration));
  }

}

//asyncValidators classes for usernameTaken and emailTaken
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

export class ValidateEmailNotTaken {
  static createValidator(registerService: RegisterService) {
    return (control: AbstractControl) => {
      return registerService.isUniqueEmail(control.value).pipe(
        map((res) =>
        {
          //console.log(JSON.stringify(res));
          return res.email ? null : { emailTaken: true };
        }),
        catchError(() => null)
      )
    };
  }
}
