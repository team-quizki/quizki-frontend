import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { User, Role } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentRole: Role;
  private currentUser: User;

  constructor(private apiService: ApiService) {
  //  this.currentRole = new Role(0, '');
//    this.currentUser= new User(0, this.currentRole, '', '', 1, '', '', '');
  //  this.currentRole = new Role(0, undefined);
  //  this.currentUser= new User(0, this.currentRole, undefined, undefined, 1, undefined, undefined, undefined);
  }

  // method for login an existing user
  public requestUserLogin(username: string, password: string): Observable<User> {

    // authorization headers are constructed in apiService using username and password
    const apiVerifyCredentialsUrl = '/api/verifyCredentials';

    return this.apiService.get(apiVerifyCredentialsUrl, username, password);

  }


  // method for saving user data returned from user login()
  public setCurrentUser( newUser: User ) {
    this.currentUser = newUser;
  }

  // method for getting the current user logged in
  public getCurrentUser(): User {
    return this.currentUser;
  }

}
