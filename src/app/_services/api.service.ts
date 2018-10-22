import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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

  post(url, data) {
  	return this.http.post(url, data, this.getHttpHeaders())
  }
}