class User {
  private readonly userId: string;
  private email: string;
  private name: string;
  private age: number;
  private readonly createdAt: Date;
  private updatedAt?: Date;
  private deletedAt?: Date;

  constructor(email: string, name: string, age: number) {
    this.userId = Math.random().toString();
    this.email = email;
    this.name = name;
    this.age = age;
    this.createdAt = new Date();
  }

  update(email: string, name: string, age: number) {
    this.email = email;
    this.name = name;
    this.age = age;
    this.updatedAt = new Date();
  }

  delete() {
    this.deletedAt = new Date();
  }
}

const user = new User("sergio.hidalgo@correo.com", "Sergio", 30);
console.log(user);
user.update("javier@correo.com", "Javier", 35);
console.log(user);
user.delete();
console.log(user);
