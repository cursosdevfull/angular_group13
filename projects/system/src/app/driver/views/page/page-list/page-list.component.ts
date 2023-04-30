import { Component } from '@angular/core';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  //columns = ['driverId', 'fullName', 'licenseDrive'];
  metadata = [
    {
      field: "driverId",
      title: "ID Driver",

    },
    {
      field: "fullName",
      title: "Driver's name"
    },

    {
      field: "licenseDrive",
      title: "# License"
    }
  ]

  dataOriginal = [
    { driverId: 1, fullName: 'José Chang', licenseDrive: 'abc-123' },
    { driverId: 2, fullName: 'Luisa Alfaro', licenseDrive: 'def-456' },
    { driverId: 3, fullName: 'Enrique Castaño', licenseDrive: 'ghi-789' },
  ];

  data: any[];

  constructor() {
    this.changePage(0);
  }

  changePage(pageNumber: number) {
    this.data = this.dataOriginal.slice(pageNumber * 10, pageNumber * 10 + 10);
  }
}
