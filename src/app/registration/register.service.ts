import { Injectable } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Observable } from '../../../node_modules/rxjs';
import { UserRegistration } from './../user/user-registration';

@Injectable()
export class RegisterService {

  constructor( private apiService: ApiService) { }

  // methods for checking if username and email address are unique
  isUniqueUsername( name: string ): Observable<any> {
    const isUniqueUrl = '/api/users/isUnique';

    return this.apiService
      .post(isUniqueUrl, {name: name });
  }

  isUniqueEmail( email: string ): Observable<any> {
    const isUniqueUrl = '/api/users/isUnique';

    return this.apiService
      .post(isUniqueUrl, {email: email });
  }

  // method for creating a new user on the backend
  registerUser( userRegistration: UserRegistration ): Observable<any> {
    const apiUsersUrl = '/api/users';

    return this.apiService
      .post(apiUsersUrl, JSON.stringify(userRegistration));
  }
  
}
