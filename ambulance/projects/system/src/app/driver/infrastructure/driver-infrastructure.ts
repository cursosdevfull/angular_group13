import { Observable, of } from 'rxjs';

import { Driver, DriverProperties } from '../domain/driver';
import { DriverRepository } from '../domain/repositories/driver-repository';

/*
  private readonly id: number;
  private correo: string;
  private nombre: string;
  private seguro: string;
  private activo: boolean;
  private readonly createdAt: Date;
  private updatedAt?: Date;
  private deletedAt?: Date;
*/

const dataDrivers = [
  {
    id: 1,
    correo: 'correo1@correo.com',
    nombre: 'nombre1',
    seguro: 'seguro1',
    activo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
  {
    id: 2,
    correo: 'correo2@correo.com',
    nombre: 'nombre2',
    seguro: 'seguro2',
    activo: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
];

export class DriverInfrastructure implements DriverRepository {
  create(driver: Driver): Observable<Driver> {
    return of(driver);
  }
  update(driver: Driver): Observable<Driver> {
    return of(driver);
  }
  delete(driver: Driver): Observable<Driver> {
    return of(driver);
  }
  get(id: number): Observable<Driver> {
    const driver = dataDrivers.find((driver) => driver.id === id);
    const driverProperties: DriverProperties = {
      id: driver.id,
      correo: driver.correo,
      nombre: driver.nombre,
      seguro: driver.seguro,
      activo: driver.activo,
      createdAt: driver.createdAt,
      updatedAt: driver.updatedAt,
      deletedAt: driver.deletedAt,
    };

    if (driver) {
      return of(new Driver(driverProperties));
    }
    throw new Error('Driver not found.');
  }
  getAll(): Observable<Driver[]> {
    const drivers = dataDrivers.map((driver: any) => {
      const driverProperties: DriverProperties = {
        id: driver.id,
        correo: driver.correo,
        nombre: driver.nombre,
        seguro: driver.seguro,
        activo: driver.activo,
        createdAt: driver.createdAt,
        updatedAt: driver.updatedAt,
        deletedAt: driver.deletedAt,
      };

      return new Driver(driverProperties);
    });

    if (drivers && drivers.length > 0) {
      return of(drivers);
    }

    throw new Error('Drivers not found.');
  }
}
