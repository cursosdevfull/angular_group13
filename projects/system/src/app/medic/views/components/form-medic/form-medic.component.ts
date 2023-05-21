import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from 'projects/system/src/app/shared/material/material.module';
import { PhotoComponent } from 'projects/system/src/app/shared/public/components/photo/photo.component';

@Component({
  standalone: true,
  selector: 'amb-form-medic',
  imports: [PhotoComponent, MaterialModule],
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent {}
