import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { plainToInstance } from 'class-transformer';
import { EnvironmentService } from 'projects/system/src/app/core/services/environment.service';
import { environment } from 'projects/system/src/environments/environment';

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

  totalRecords = 0;

  pageSize = 0;

  constructor(
    private readonly application: MedicApplication,
    private readonly router: Router,
    private environment: EnvironmentService,
    private readonly dialog: MatDialog
  ) {
    this.changePage(0);
    this.pageSize = this.environment.parameters.pageSize;
  }

  changePage(pageNumber: number) {
    this.application.page(pageNumber).subscribe((data) => {
      this.data = plainToInstance(
        MedicListResponse,
        data.records
      ) as unknown as MedicListResponse[];
      this.totalRecords = data.totalRecords;
    });
  }

  showForm() {
    this.dialog.open(FormMedicComponent, {
      /*       width: '500px',
      height: '500px', */
      disableClose: true,
      panelClass: 'modal-medic',
    });
  }
}
