import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { ConfirmComponent } from '../public/components/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private readonly notify: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  showNotify(message: string, duration: number = 3500) {
    this.notify.open(message, null, {
      duration,
    });
  }

  showConfirm(message: string = ''): Observable<any> {
    const reference = this.dialog.open(ConfirmComponent, {
      width: '320px',
      disableClose: true,
    });

    if (message) reference.componentInstance.message = message;

    return reference.afterClosed();
  }
}
