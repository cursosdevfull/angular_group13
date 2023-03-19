import { Component } from '@angular/core';

@Component({
  selector: 'amb-list-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListUserComponent {
  username = 'shidalgo';
  currentDate = new Date();

  users = [
    { name: 'shidalgo', age: 30 },
    { name: 'johndoe', age: 40 },
    { name: 'janedoe', age: 50 },
    { name: 'johndoe', age: 60 },
  ];
}
