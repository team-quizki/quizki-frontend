export class UserNew {
  constructor(
    public id: number,
    public roles: Roles,
    public password: string,
    public name: string,
    public enabled: number,
    public email: string,
    public fullname: string,
    public demographic?: string
  ){}
}

export class Roles {
  constructor(
    public id: number,
    public name: number
  ){}
}
