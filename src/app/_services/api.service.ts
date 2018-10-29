import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

const baseUrl = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getHttpHeaders() {
  	let rtn = {
  		headers: new HttpHeaders({
  			'Content-Type': 'application/json'
  		})
  	}

  	return rtn;
  }

  // http.get needs an Authorization in header
  getHttpHeadersWithBase64Authorization(username:string, password: string) {
  	let rtn = {
  		headers: new HttpHeaders({
        'Authorization': "Basic " + btoa(`${username}:${password}`),
  			'Content-Type': 'application/json'
  		})//,
      //responseType: 'json'
  	}

  	return rtn;
  }

  get(url:string, username:string, password:string) {
    return this.http.get<any>(baseUrl + url,
      this.getHttpHeadersWithBase64Authorization(username, password))
  }

  post(url, data) {
  	return this.http.post(baseUrl + url, data, this.getHttpHeaders())
  }

}
