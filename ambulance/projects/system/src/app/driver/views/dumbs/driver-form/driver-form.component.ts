import { Component } from '@angular/core';

import { DriverApplication } from '../../../application/driver-application';
import { DriverFactory } from '../../../domain/driver.factory';

@Component({
  selector: 'amb-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css'],
})
export class DriverForm {
  constructor(private readonly driverApplication: DriverApplication) {
    const nombre = 'Juan Pérez';
    const correo = 'juan.perez@correo.com';

    const driver = DriverFactory.create(nombre, correo);

    const driverResponse = this.driverApplication.create(driver);
    console.log(driverResponse);

    /*     console.log(driver);

    driver.update({ nombre: 'Juan Carlos' });
    console.log(driver);

    driver.delete();
    console.log(driver); */
  }
}
