import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { throwError } from '../../../node_modules/rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHttpHeaders() {
    const rtn = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return rtn;
  }

  // http.get needs an Authorization in header
  getHttpHeadersWithBase64Authorization(username: string, password: string) {
    const rtn = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(`${username}:${password}`),
        'Content-Type': 'application/json'
      })
    };
    return rtn;
  }

  get(url: string, username: string, password: string) {
    return this.http.get<any>(baseUrl + url,
      this.getHttpHeadersWithBase64Authorization(username, password))
      .pipe(
        catchError(this.handleError)
      );
  }

  post(url, data) {
    return this.http.post(baseUrl + url, data, this.getHttpHeaders());
  }
  
  postCreatedQuestion(url:any, data:any) {
        var username = "johnathan";
        var password = "password";
        return this.http.post(baseUrl + url, data, this.getHttpHeadersWithBase64Authorization(username, password));
  }
  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log('In handleError: error= ' + JSON.stringify(error));
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}