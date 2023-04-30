import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private readonly notify: MatSnackBar) {}

  showNotify(message: string, duration: number = 3500) {
    this.notify.open(message, null, {
      duration,
    });
  }
}
