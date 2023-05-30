import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'amb-confirm',
  standalone: true,
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatDialogModule],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent {
  message: string = '¿Está seguro que desea eliminar el registro?';
}
