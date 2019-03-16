import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { User, Role } from '../user/user';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private apiService: ApiService, private userService: UserService ) {
  }

  // method for login an existing user
  public requestUserLogin(username: string, password: string): Promise<any> {

    // authorization headers are constructed in apiService using username and password
    const apiVerifyCredentialsUrl = '/api/verifyCredentials';

    let promise = new Promise((resolve, reject) => {
      this.apiService.get(apiVerifyCredentialsUrl, username, password)
        .toPromise()
        .then((res: User) => { // success state
            this.userService.setCurrentUser(res);
            resolve();
          })
        .catch(
          (errorMsg) => { // error state
            reject(errorMsg);
          }
        );
    });
    return promise;
  }

}
