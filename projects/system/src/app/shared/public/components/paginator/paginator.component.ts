import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'amb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() length = 50;
  @Input() pageSize = 10;
  pageIndex = 0;

  @Output() onChangePage: EventEmitter<number> = new EventEmitter();

  pageEvent(event: PageEvent) {
    this.onChangePage.emit(event.pageIndex);
  }
}
