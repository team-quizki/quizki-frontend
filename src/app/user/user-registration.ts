//define UserRegistration class
export class UserRegistration {

  constructor(
    public id: string,
    public password: string,
    public username: string, //remember to change this field to "name"
    public enabled : number,
    public role_id: number,
    public email: string,
    public fullname: string,
    public demographic?: string,
  ) {  }

}
