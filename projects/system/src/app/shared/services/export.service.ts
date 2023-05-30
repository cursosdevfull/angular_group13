import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { ExportComponent } from '../public/components/export/export.component';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor(private bottomSheet: MatBottomSheet) {}

  showExport(
    records: any[],
    fileName: string,
    title: string,
    metadata: Array<Record<string, string>>
  ) {
    this.bottomSheet.open(ExportComponent, {
      data: {
        records,
        fileName,
        title,
        metadata,
      },
    });
  }
}
