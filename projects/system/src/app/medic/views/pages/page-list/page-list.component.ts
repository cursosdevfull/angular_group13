import { Component } from '@angular/core';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  metadata = [
    {
      field: 'medicId',
      title: 'ID Medic',
    },
    {
      field: 'fullName',
      title: "Medic's name",
    },
    {
      field: 'cmp',
      title: 'CMP',
    },
  ];
  //columns = ['medicId', 'fullName', 'cmp'];

  dataOriginal = [
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
    },
    {
      medicId: 1,
      fullName: 'Pedro Bayeto',
      cmp: 'abc-123',
    },
    {
      medicId: 2,
      fullName: 'Alfredo Ballón',
      cmp: 'def-456',
    },
    {
      medicId: 3,
      fullName: 'Silvia Paredes',
      cmp: 'ghi-789',
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
