import { Component, Input } from '@angular/core';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() metadata: any[] = [];
  @Input() data: any[] = [];
  columns: string[];
  /*   columns: string[] = ['id', 'name', 'lastname'];

  data = [
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Zavala',
    },
    { id: 2, name: 'Claudia', lastname: 'Zapata' },
    { id: 3, name: 'Juan', lastname: 'Pérez' },
  ]; */

  constructor() {}

  ngOnInit() {
    this.columns = this.metadata.map((item) => item.field);
  }
}
