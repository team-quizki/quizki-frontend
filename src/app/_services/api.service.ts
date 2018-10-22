import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
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

  post(url, data) {
  	return this.http.post(baseUrl + url, data, this.getHttpHeaders())
  }

}
