import { Component } from '@angular/core';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  //columns = ['userId', 'email', 'firstName', 'lastName'];
  metadata = [
    {
      field: 'userId',
      title: 'ID User',
    },
    {
      field: 'email',
      title: 'Email',
    },
    {
      field: 'firstName',
      title: "First name's user",
    },
    {
      field: 'lastName',
      title: "Last name's user",
    },
  ];
  dataOriginal = [
    {
      userId: 1,
      email: 'sergio@correo.com',
      firstName: 'Sergio',
      lastName: 'Hidalgo',
    },
    {
      userId: 2,
      email: 'perez@correo.com',
      firstName: 'Alberto',
      lastName: 'Pérez',
    },
    {
      userId: 3,
      email: 'andrea@correo.com',
      firstName: 'Andrea',
      lastName: 'Camargo',
    },
  ];

  data: any[];

  constructor() {
    this.changePage(0);
  }

  changePage(pageNumber: number) {
    this.data = this.dataOriginal.slice(pageNumber * 10, pageNumber * 10 + 10);
  }
}
