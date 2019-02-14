
export class Role {
  constructor(
    public id: number,
    public name: string
  ) {}

}

export class User {
  constructor(
    public id: number,
    public role: Role,
    public password: string,
    public name: string,
    public enabled: number,
    public email: string,
    public fullname: string,
    public loggedIn?: boolean,
    public demographic?: string

  ) {}


  public loggedOutNow() {
    return this.loggedIn = false;
  }

  public loggedInNow() {
    return this.loggedIn = true;
  }

  public isUserLoggedIn() {
    return this.loggedIn;
  }

  public setUserData(user: User) {
    this.id = user.id;
    this.role.id = user.role.id;
    this.role.name = user.role.name;
    this.password = user.password;
    this.name = user.name;
    this.enabled = user.enabled;
    this.email = user.email;
    this.fullname = user.fullname;
    this.demographic = user.demographic;
  }

}
