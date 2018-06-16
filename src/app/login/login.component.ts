import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loginStatus = "Logged Out";
    this.username = '';
    this.password = '';
  }

  public login(){
    console.log("Login: Username: " + this.username + " Password: " + this.password);
    this.loginStatus = "Requested"
    this.requestLogin(this.username, this.password).subscribe((res:Response) => console.log(res));
  }

  private requestLogin(user: string, pw: string): Observable<any>{
    const body = new HttpParams()
    .set('username', user)
    .set('password', pw);

    return this.http.post('http://localhost:8080/loginServlet',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );

  }

}
