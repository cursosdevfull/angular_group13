import { Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'projects/system/src/app/shared/material/material.module';
import { PhotoComponent } from 'projects/system/src/app/shared/public/components/photo/photo.component';

@Component({
  standalone: true,
  selector: 'amb-form-medic',
  imports: [PhotoComponent, MaterialModule, ReactiveFormsModule],
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent {
  fg: FormGroup;
  title: string;
  photoToShow: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private reference: MatDialogRef<FormMedicComponent>
  ) {
    this.title = data ? 'Edit' : 'New';
    this.createForm();
  }

  createForm() {
    this.fg = new FormGroup({
      id: new FormControl(this.data?.id),
      name: new FormControl(this.data?.name, [Validators.required]),
      surname: new FormControl(this.data?.surname, [Validators.required]),
      lastname: new FormControl(this.data?.lastName, [Validators.required]),
      cmp: new FormControl(this.data?.cmp, [Validators.required]),
      dni: new FormControl(this.data?.dni, [Validators.required]),
      email: new FormControl(this.data?.email, [
        Validators.required,
        Validators.email,
      ]),
    });

    if (this.data) {
      this.fg.addControl('photo', new FormControl());
      this.photoToShow = this.data.photo;
    } else {
      this.fg.addControl('photo', new FormControl(null, [Validators.required]));
    }
  }

  save() {
    const values = {
      id: this.fg.value.id,
      nombre: this.fg.value.name,
      segundo_nombre: this.fg.value.surname,
      apellido: this.fg.value.lastname,
      cmp: this.fg.value.cmp,
      dni: this.fg.value.dni,
      correo: this.fg.value.email,
      foto: this.fg.value.photo,
    };

    const recordId = values.id;
    delete values.id;

    const fd = new FormData();

    for (const key of Object.keys(values)) {
      if (key === 'foto' && values[key]) {
        fd.append(key, values[key]);
      } else if (key !== 'foto') {
        fd.append(key, values[key]);
      }
    }

    this.reference.close({ id: recordId, data: fd });
  }
}
