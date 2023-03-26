import { Driver, DriverProperties } from './driver';
import { EmailVO } from './value-objects/email';

export class DriverFactory {
  static create(nombre: string, correo: string): Driver {
    if (nombre.trim() === '') {
      throw new Error('El nombre no puede estar vacío');
    }

    const emailVO = new EmailVO(correo);

    const driverProperties: DriverProperties = {
      id: Math.floor(Math.random() * 1000 + 1),
      nombre: nombre.toUpperCase(),
      correo: emailVO.getValue(),
    };

    return new Driver(driverProperties);
  }
}
