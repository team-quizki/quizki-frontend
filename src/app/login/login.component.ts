import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders, HttpResponse} from '@angular/common/http';
import {User} from '../user/user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginStatus: string;
  user: User;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loginStatus = "Logged Out";
    this.username = '';
    this.password = '';
  }

  public login(){
    console.log("Login: Username: " + this.username + " Password: " + this.password);
    this.loginStatus = "Requested"
    this.requestLogin(this.username, this.password).subscribe((res: User) => {
      console.log("Login User: " + res.name);
      this.loginStatus = `${res.name} Logged In`;
    });
  }

  private requestLogin(user: string, pw: string): Observable<User>{

    //construct the authorization headers
    let authHeader: string = "Basic " + btoa(`${user}:${pw}`);

    console.log("User: " + user);
    console.log("PW: " + pw);
    /*this doesn't work!!!
    authHeader.concat( user);
    authHeader.concat( ":");
    authHeader.concat( pw);
    */
    console.log("Authorization Header: " + authHeader);


    return this.http.get<User>('http://localhost:8080/api/verifyCredentials',
      {
        headers: new HttpHeaders()
          .set('Authorization', authHeader)
          .append('content-type',"application/json"),
        responseType: 'json'
      }
    );

  }

}
