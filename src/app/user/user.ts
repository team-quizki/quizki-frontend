export class User {
  constructor(
    public id: number,
    public name: string,
    public enabled: number,
    public roles: object[]
  ){}
}
