import { Component, Inject } from '@angular/core';

import { myFactory, myToken, tokenUser } from '../app.module';
import { User } from '../models/user';
import { MovieService } from '../services/Movie.service';
import { UserService } from '../services/User.service';

@Component({
  selector: 'amb-list-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListUserComponent {
  users: User[];

  constructor(
    @Inject(myToken) private readonly userService: UserService,
    @Inject(tokenUser) private readonly tokenUser: string[],
    @Inject(myFactory) private readonly myFactory: MovieService
  ) {
    this.users = userService.users;
    console.log('roles', tokenUser);

    const newUser = new User(
      'Sergio',
      'Hidalgo',
      'sergio.hidalgo@correo.com',
      'IT'
    );

    this.userService.add(newUser);
  }
  /* username = 'shidalgo';
  currentDate = new Date();

  users = [
    { name: 'shidalgo', age: 30 },
    { name: 'johndoe', age: 40 },
    { name: 'janedoe', age: 50 },
    { name: 'johndoe', age: 60 },
  ]; */
}
