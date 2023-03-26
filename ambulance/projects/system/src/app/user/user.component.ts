import { Component, Input } from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../services/User.service';

@Component({
  selector: 'amb-user', //<h1> <article> <div> <span> <p> <ul> <li> <a> <img> <input> <button>
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', './user.css'],
  providers: [{ provide: 'UserService', useClass: UserService }],
})
export class UserComponent {
  @Input() user?: User;
}
