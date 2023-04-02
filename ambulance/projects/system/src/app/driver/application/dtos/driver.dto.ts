import { Exclude, Expose } from 'class-transformer';

export class DriverResponse {
  @Expose()
  id: number;

  @Expose({ name: 'nombre' })
  name: string;

  @Expose({ name: 'correo' })
  email: string;

  @Exclude()
  activo: boolean;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  deletedAt: Date;
}

/* export interface DriverResponse {
  id: number;
  nombre: string;
  correo: string;
} */

/* export class DriverResponse {
  id: number;
  name: string;
  email: string;

  constructor(id: number, nombre: string, correo: string) {
    this.id = id;
    this.name = nombre;
    this.email = correo;
  }
}

export class DriverDto {
  static fromDomainToResponse(driver: Driver): DriverResponse {
    return new DriverResponse(
      driver.properties.id,
      driver.properties.nombre,
      driver.properties.correo
    );
  }
} */
