import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { User, Role } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private apiService: ApiService ) {
  }

  // method for login an existing user
  public requestUserLogin(username: string, password: string): Observable<User> {

    // authorization headers are constructed in apiService using username and password
    const apiVerifyCredentialsUrl = '/api/verifyCredentials';

    return this.apiService.get(apiVerifyCredentialsUrl, username, password);

  }

}
