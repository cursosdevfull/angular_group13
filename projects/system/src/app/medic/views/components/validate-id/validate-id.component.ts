import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IDeactivate } from '../deactivate.interface';

@Component({
  selector: 'amb-validate-id',
  templateUrl: './validate-id.component.html',
  styleUrls: ['./validate-id.component.css'],
})
export class ValidateIdComponent implements IDeactivate {
  results: any;
  fg: FormGroup;

  initialData = {
    name: 'Juan',
    lastName: 'Perez',
  };

  dataSaved = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.createForm();
  }

  validateInformationBeforeExit(): boolean {
    const isOriginal = this.fg.pristine;

    if (isOriginal || this.dataSaved) return true;

    return confirm('¿Está seguro de salir de la página?');
    /* 


    const { name, lastName } = this.fg.value;
    if (
      name === this.initialData.name &&
      lastName === this.initialData.lastName
    ) {
      return true;
    }
    return confirm('¿Está seguro de salir de la página?'); */
  }

  createForm() {
    this.fg = new FormGroup({
      name: new FormControl(this.initialData.name, [Validators.required]),
      lastName: new FormControl(this.initialData.lastName, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
    this.results = this.activatedRoute.snapshot.data['info'];
  }

  exit() {
    //const response = this.validateInformationBeforeExit();
    /* if (response) */
    this.dataSaved = true;
    this.router.navigate(['/medic']);
  }
}
