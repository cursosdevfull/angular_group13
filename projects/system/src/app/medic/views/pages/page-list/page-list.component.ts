import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { plainToInstance } from 'class-transformer';
import { EnvironmentService } from 'projects/system/src/app/core/services/environment.service';
import { ExportService } from 'projects/system/src/app/shared/services/export.service';
import { environment } from 'projects/system/src/environments/environment';

import { UtilsService } from '../../../../shared/services/utils.service';
import { MedicApplication } from '../../../application/medic.application';
import { FormMedicComponent } from '../../components/form-medic/form-medic.component';
import { MedicListResponse } from '../../responses/medic-list.response';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  metadata = [
    {
      field: 'id',
      title: 'ID Medic',
    },
    {
      field: 'name',
      title: 'Name',
    },
    {
      field: 'surname',
      title: 'Second name',
    },
    {
      field: 'lastName',
      title: 'Last Name',
    },
    {
      field: 'cmp',
      title: 'CMP',
    },
    {
      field: 'email',
      title: 'Email',
    },
  ];

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

  totalRecords = 0;

  pageSize = 0;

  currentPage = 0;

  constructor(
    private readonly application: MedicApplication,
    private readonly router: Router,
    private environment: EnvironmentService,
    private readonly dialog: MatDialog,
    private readonly utils: UtilsService,
    private readonly exportService: ExportService
  ) {
    this.changePage(0);
    this.pageSize = this.environment.parameters.pageSize;
  }

  changePage(pageNumber: number) {
    this.application.page(pageNumber).subscribe((data) => {
      this.currentPage = pageNumber;
      this.data = plainToInstance(
        MedicListResponse,
        data.records
      ) as unknown as MedicListResponse[];
      this.totalRecords = data.totalRecords;
    });
  }

  showForm(row: any = null) {
    const reference: MatDialogRef<FormMedicComponent> = this.dialog.open(
      FormMedicComponent,
      {
        disableClose: true,
        panelClass: 'modal-medic',
        data: row,
      }
    );

    reference.afterClosed().subscribe((result) => {
      if (!result) return;

      const id = result.id;

      if (id) {
        this.application.updateResponse(id, result.data).subscribe({
          next: () => {
            this.utils.showNotify('Se actualizó correctamente');
            this.changePage(this.currentPage);
          },
        });
      } else {
        this.application.insert(result.data).subscribe({
          next: () => {
            this.utils.showNotify('Se agregó correctamente');
            this.changePage(this.currentPage);
          },
        });
      }
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
          { field: 'segundo_nombre', title: 'Surname' },
          { field: 'apellido', title: 'Last Name' },
          { field: 'cmp', title: 'CMP' },
          { field: 'dni', title: 'DNI' },
          { field: 'correo', title: 'Email' },
        ];
        this.exportService.showExport(
          data,
          'medics',
          'lista de médicos',
          metadata
        );
      },
    });
  }
}
