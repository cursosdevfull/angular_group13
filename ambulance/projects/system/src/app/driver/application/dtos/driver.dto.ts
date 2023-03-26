import { Driver } from '../../domain/driver';

export interface DriverResponse {
  id: number;
  nombre: string;
  correo: string;
}

export class DriverDto {
  static fromDomainToResponse(driver: Driver): DriverResponse {
    return {
      id: driver.properties.id,
      nombre: driver.properties.nombre,
      correo: driver.properties.correo,
    };
  }
}
