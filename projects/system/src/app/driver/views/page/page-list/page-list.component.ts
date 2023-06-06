import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvironmentService } from 'projects/system/src/app/core/services/environment.service';

import { ExportService } from '../../../../shared/services/export.service';
import { UtilsService } from '../../../../shared/services/utils.service';
import { DriverApplication } from '../../../application/driver.application';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  metadata = [
    {
      field: 'id',
      title: 'ID',
    },
    {
      field: 'nombre',
      title: 'Nombre del piloto',
    },
  ];

  data: any[];

  totalRecords = 0;

  pageSize = 0;

  currentPage = 0;

  constructor(
    private readonly application: DriverApplication,
    private readonly router: Router,
    private environment: EnvironmentService,
    private readonly utils: UtilsService,
    private readonly exportService: ExportService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly driverService: DriverService
  ) {
    this.changePage(0);
    this.pageSize = this.environment.parameters.pageSize;
  }

  changePage(pageNumber: number) {
    this.application.getPage(pageNumber).subscribe((data) => {
      console.log(data);
      this.currentPage = pageNumber;
      this.data = data.records;
      this.totalRecords = data.totalRecords;
    });
  }

  delete(row: any) {
    const reference = this.utils.showConfirm('¿Está seguro?');
    reference.subscribe({
      next: (result) => {
        if (result) {
          this.application.delete(row.id).subscribe({
            next: () => {
              this.utils.showNotify('Se eliminó correctamente');
              this.changePage(this.currentPage);
            },
          });
        }
      },
    });
  }

  showExport() {
    this.application.list().subscribe({
      next: (data) => {
        // id	nombre	segundo_nombre	apellido	cmp	dni	correo

        const metadata = [
          { field: 'id', title: 'ID' },
          { field: 'nombre', title: 'Name' },
        ];
        this.exportService.showExport(
          data,
          'drivers',
          'Lista de pilotos',
          metadata
        );
      },
    });
  }

  create() {
    this.router.navigate(['create'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge',
      queryParams: { category: 'maintainer' },
    });
  }

  edit(row: any) {
    this.driverService.driverSelected = row;
    this.router.navigate(['edit', row.id], {
      relativeTo: this.activatedRoute,
    });
  }
}
