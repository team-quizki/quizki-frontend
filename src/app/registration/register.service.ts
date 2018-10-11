import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HandleError } from './../http-error-handler.service';
import { UserNameEmail } from './../user/userNameEmail';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  isUniqueURL = 'http://localhost:8080/api/users/isUnique';
  handleError : undefined; /* can't seam to get the handleError to work  */

  constructor( private http: HttpClient ) { }

  isUniqueName( name: string ) : Observable<string> {
    console.log('in isUniqueName ' + name);
    let nameString = '{"name":"' + name + '"}';

    return this.http.post<string>(this.isUniqueURL,
      nameString,
      {
        headers: new HttpHeaders()
            .set('content-type',"application/json"),
        responseType: 'json'
      }
    );
    /*
    return this.http.post<string>(this.isUniqueURL, name, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    */
  }


}
