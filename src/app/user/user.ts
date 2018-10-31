
export class User {
  constructor(
    public id: number,
    public roles: Roles,
    public password: string,
    public name: string,
    public enabled: number,
    public email: string,
    public fullname: string,
    public loggedIn?: boolean,
    public demographic?: string

  ){}


  public logoutUser(){
    this.loggedIn = false;
  }

  public loginUser(){
    this.loggedIn = true;
  }

  public isUserLoggedIn(){
    if (this.loggedIn === undefined) return false;
    return this.loggedIn;
  }


  public setUserData(user:User){
    this.id = user.id;
    this.roles.id = user.roles.id;
    this.roles.name = user.roles.name;
    this.password = user.password;
    this.name = user.name;
    this.enabled = user.enabled;
    this.email = user.email;
    this.fullname = user.fullname;
    if (user.demographic !== undefined){
        this.demographic = user.demographic;
    }
    if (user.loggedIn !== undefined){
        this.loggedIn = user.loggedIn;
    }
  }

}

export class Roles {
  constructor(
    public id: number,
    public name: string
  ){}

}
