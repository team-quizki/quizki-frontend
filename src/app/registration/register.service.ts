import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../_services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private apiService: ApiService) { }

  isUniqueName( name: string ) : Observable<string> {

    let isUniqueUrl = 'http://localhost:8080/api/users/isUnique';
    let isUniqueResult;

    this.apiService
      .post(isUniqueUrl, {name: name })
      .subscribe((data) => {
        isUniqueResult = data;
        return isUniqueResult.name;
        });
      // add error handler
    return ;// not sure what to return here.
  }


}
