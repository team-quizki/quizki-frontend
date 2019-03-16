
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
    public demographic?: string
  ) {}

}
