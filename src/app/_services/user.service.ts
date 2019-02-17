import { Injectable } from '@angular/core';
import { Role, User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentRole: Role;
  private currentUser: User;

  constructor() { }

  // method for saving user data returned from user login()
  public setCurrentUser( newUser: User ) {
    this.currentUser = newUser;
  }

  // method for getting the current user logged in
  public getCurrentUser(): User {
    return this.currentUser;
  }

}
