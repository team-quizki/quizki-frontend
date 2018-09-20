//define UserRegistration class
export class UserRegistration {

  constructor(
    public id: string,
    public password: string,
    public username: string,
    public enabled : boolean,
    public role_id: number,
    public email: string,
    public fullname: string,
    public demographic?: string,
  ) {  }

}
