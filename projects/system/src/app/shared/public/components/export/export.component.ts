import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import * as XLSX from 'xlsx';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export type ACTIONS_PDF = 'view' | 'download' | 'print';
@Component({
  selector: 'amb-export',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent {
  records: any[];
  fileName: string;
  title: string;
  metadata: Array<Record<string, string>>;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private reference: MatBottomSheetRef<ExportComponent>
  ) {
    this.records = data.records;
    this.fileName = data.fileName;
    this.title = data.title;
    this.metadata = data.metadata;
  }

  exportToExcel() {
    this.reference.dismiss();

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_json(
      worksheet,
      this.toFormat(this.records, this.metadata)
    );
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, this.title);
    XLSX.writeFile(workbook, `${this.fileName}.xlsx`);
  }

  async exportToPDF(option: ACTIONS_PDF) {
    this.reference.dismiss();

    const imageDataUrl = await this.toDataUrl('/assets/images/logo.jpg');

    const data = this.toFormat(this.records, this.metadata);

    const dataFormatted = {
      footer: function (currentPage, pageCount) {
        return [
          {
            text: currentPage.toString() + ' de ' + pageCount.toString(),
            alignment: 'center',
          },
        ];
      },
      /*header: function (currentPage, pageCount) {
        return [
          {
            text: currentPage.toString() + ' of ' + pageCount.toString(),
            alignment: 'center',
          },
        ];
      },*/
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [20, 20, 20, 20],
      content: [
        this.generateTableHeader(data, imageDataUrl, this.title),
        this.generateTableData(data),
      ],
      styles: this.generateStyles(),
    };

    this.generatePDF(dataFormatted, this.fileName, option);
  }

  toFormat(records: any[], metadata: Array<Record<string, string>>) {
    const data = records.map((record) => {
      const result: Record<string, string> = {};
      metadata.forEach((meta) => {
        result[meta['title']] = record[meta['field']];
      });
      return result;
    });
    return data;
  }

  async toDataUrl(imagePath: string) {
    const response = await fetch(imagePath);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

  generatePDF(data: any, fileName: string, option: ACTIONS_PDF) {
    const pdfDocGenerator = pdfMake.createPdf(data);

    switch (option) {
      case 'view':
        pdfDocGenerator.open();
        break;
      case 'download':
        pdfDocGenerator.download(fileName);
        break;
      case 'print':
        pdfDocGenerator.print();
        break;
    }
  }

  generateTableHeader(data: any, imageDataUrl: any, title: string) {
    return {
      margin: [0, 0, 0, 15],
      table: {
        widths: [120, 'auto', 50, 'auto'],
        body: [
          [
            {
              borderWidth: ['1px', '1px', '1px', '1px'],
              borderColor: ['#000', '#000', '#000', '#000'],
              border: [false, false, true, false],
              width: 100,
              image: imageDataUrl,
            },
            {
              border: [false, false, false, false],
              text: [
                this.generateRow('Channel', 'headerLeft'),
                this.generateRow('Av. De la República 123', 'subHeaderLeft'),
                this.generateRow('San Isidro, Lima Perú', 'subHeaderLeft'),
                this.generateRow('Tel: (591) 222-2222', 'subHeaderLeft'),
                this.generateRow('info@channel.com', 'subHeaderLeft'),
                this.generateRow('www.channel.com', 'subHeaderLeft'),
              ],
            },
            {
              border: [false, false, false, false],
              text: '',
            },
            {
              border: [false, false, false, false],
              text: title,
              style: 'titleReport',
            },
          ],
        ],
      },
    };
  }

  generateRow(text: string, style: string = null) {
    const row = {
      text: text + '\n',
    };

    if (style) {
      row['style'] = style;
    }

    return row;
  }

  generateStyles() {
    return {
      headerLeft: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 16,
        color: '#3c3b40',
      },
      subHeaderLeft: {
        fontFamily: 'Verdana',
        fontSize: 10,
        height: 16,
        color: '#3c3b40',
      },
      titleReport: {
        fontFamily: 'Verdana',
        fontSize: 15,
        height: 16,
        color: '#3c3b40',
      },
      header: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 14,
        color: '#3c3b40',
        bold: true,
      },
    };
  }

  generateTableData(records: any[]) {
    const body = records.map((el) =>
      Object.keys(el).map((prop) => this.generateRowData(prop, el[prop]))
    );

    const rowHeaders = Object.keys(records[0]).map((prop) => [
      {
        border: [false, false, false, false],
        text: prop,
        style: 'header',
      },
    ]);

    const quantityColumns = rowHeaders.length;
    const widths = Array.from(Array(quantityColumns).keys()).map(
      (el) => Math.floor(100 / quantityColumns) + '%'
    );

    body.unshift(rowHeaders);

    return {
      margin: [0, 0, 0, 15],
      table: {
        widths,
        body,
      },
    };
  }

  generateRowData(propertyName: string, value: string) {
    return [
      {
        border: [false, false, false, false],
        text: value,
      },
    ];
  }
}
