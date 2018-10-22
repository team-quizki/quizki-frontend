//define UserRegistration class
export class UserRegistration {

  constructor(
    public password: string,
    public name: string,
    public email: string,
    public fullname: string,
    public id?: string,
    public roleId?: number,
    public enabled?: number,

  ) {  }

}
