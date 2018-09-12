//define UserRegistration class
export class UserRegistration {

  constructor(
    public id: number,
    public password: string,
    public username: string,
    public enabled : boolean,
    public role: string,
    public email: string,
    public fullname: string,
    public demographic?: string,
  ) {  }

}
