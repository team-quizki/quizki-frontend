import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';

import { ApiService } from '../_services/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { map, catchError } from '../../../node_modules/rxjs/operators';

@Injectable()
export class RegisterService {

  constructor( private apiService: ApiService) { }

  isUniqueUsername( name: string ) : Observable<any[] | any>{

    let isUniqueUrl = '/api/users/isUnique';
    let isUniqueResult;
    let nameUnique;

    // make post to backend to determine if isUniqueUsername
    this.apiService
      .post(isUniqueUrl, {name: name })
        .subscribe((data) => {
          isUniqueResult = data;
          console.log("in " + JSON.stringify(data));
        });

    console.log("out " + JSON.stringify(isUniqueResult));

    if (isUniqueResult === undefined) {nameUnique = undefined;}
      else {nameUnique = isUniqueResult.name;};

    return nameUnique;
  }

}

export class ValidateUsernameNotTaken {
  static createValidator(registerService: RegisterService) {
    return (control: AbstractControl) => {
      return registerService.isUniqueUsername(control.value).pipe(
        map((res) =>  {return res ? null : { usernameTaken: true };}),
        catchError(() => null)
      )
    };
  }
}
