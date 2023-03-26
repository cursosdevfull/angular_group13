export class User {
  name: string;
  lastname: string;
  email: string;
  area: string;

  constructor(name: string, lastname: string, email: string, area: string) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.area = area;
  }
}
