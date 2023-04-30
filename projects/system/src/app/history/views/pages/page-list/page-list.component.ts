import { Component } from '@angular/core';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  //columns = ['historyId', 'fullNamePatient', 'medic', 'requestDate'];

  metadata = [
    {
      field: 'historyId',
      title: 'ID History',
    },
    {
      field: 'fullNamePatient',
      title: 'Nombre completo',
    },
    {
      field: 'medic',
      title: "Medic's name",
    },
    { field: 'requestDate', title: 'Date' },
  ];

  dataOriginal = [
    {
      historyId: 1,
      fullNamePatient: 'Ana Tejada',
      medic: 'Raúl Caravaglia',
      requestDate: '02/04/2023',
    },
    {
      historyId: 2,
      fullNamePatient: 'Carmen Loyola',
      medic: 'Claudia Tasayco',
      requestDate: '14/04/2023',
    },
    {
      historyId: 3,
      fullNamePatient: 'Jorge Pino',
      medic: 'Antonia Cáceres',
      requestDate: '22/04/2023',
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
