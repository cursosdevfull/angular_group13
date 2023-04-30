import { MatPaginatorIntl } from '@angular/material/paginator';

export class Paginator extends MatPaginatorIntl {
  override nextPageLabel = 'Siguiente página';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return 'Not records found';
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length} registros`;
  };
}
