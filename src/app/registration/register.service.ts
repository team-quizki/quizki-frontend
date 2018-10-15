import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient) { }

  isUniqueName( name: string ) : Observable<string> {
    console.log('in isUniqueName ' + name);
    let isUniqueURL = 'http://localhost:8080/api/users/isUnique';
    let nameInJSONString = '{"name":"' + name + '"}';

    let httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')//,
    //  responseType: 'json'
    };

    return this.http.post<string>(isUniqueURL,
      nameInJSONString, httpOptions);

      /* This is the description for a post returning json
        post(url: string, body: any | null, options?: {
          headers?: HttpHeaders | {
              [header: string]: string | string[];
          };
          observe?: 'body';
          params?: HttpParams | {
              [param: string]: string | string[];
          };
          reportProgress?: boolean;
          responseType?: 'json';
          withCredentials?: boolean;
        }): Observable<Object>
  */

/*
    return this.http.post<string>(isUniqueURL,
      nameInJSONString,
      {
        headers: new HttpHeaders()
            .set('content-type','application/json'),
        responseType: 'json'
      }
    );

    return this.http.post<string>(this.isUniqueURL, nameAsJSON, httpOptions)
      .pipe(
        catchError(this.handleError('isUnique', name))
      );
*/
  }


}
