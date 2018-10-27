//define UserRegistration class
export class UserRegistration {

  constructor(
    public password: string,
    public name: string,
    public roleId: number,
    public email: string,
    public fullname: string,
    public id?: string,
    public enabled?: number
  ) {  }

}
