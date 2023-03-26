import { Injectable } from '@angular/core';

import { LogService } from '../log.service';
import { User } from '../models/user';

@Injectable()
export class UserService {
  users: User[] = [
    new User('John', 'Doe', 'john.doe@correo.com', 'IT'),
    new User('Jane', 'Doe', 'jane.doe@correo.com', 'Help Desk'),
  ];

  constructor(private readonly log: LogService) {}

  add(user: User) {
    this.users.push(user);
    this.log.write('User added');
  }
}
