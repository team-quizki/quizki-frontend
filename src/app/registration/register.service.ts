import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../_services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private apiService: ApiService) { }

  isUniqueName( name: string ) : Observable<string> {

    let isUniqueUrl = '/api/users/isUnique';
    let isUniqueResult;

    this.apiService
      .post(isUniqueUrl, {name: name })
      .subscribe((data) => {
        isUniqueResult = data;
        console.log("in isUniqueName line 22: isUniqueResult.name= " + isUniqueResult.name);
      });
      // add error handler

    console.log("leaving isUniqueName line 26: isUniqueResult.name= " + isUniqueResult.name);

    return isUniqueResult.name;// not sure what to return here.
  }

}
