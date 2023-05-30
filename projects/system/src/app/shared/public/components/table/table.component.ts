import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ContentChildren(MatColumnDef) columnsDefs: QueryList<MatColumnDef>;

  @Input()
  metadata: any[] = [];
  @Input() data: any[] = [];
  columns: string[];

  constructor() {}

  ngOnInit() {
    this.columns = this.metadata.map((item) => item.field);
  }

  ngAfterViewInit() {}

  ngAfterContentInit() {
    if (!this.columnsDefs) return;

    this.columnsDefs.forEach((columnDef) => {
      this.columns.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    });
  }
}
