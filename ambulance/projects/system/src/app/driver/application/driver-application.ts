import { Inject, Injectable } from '@angular/core';
import { plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';

import { Driver } from '../domain/driver';
import { DriverRepository } from '../domain/repositories/driver-repository';
import { DriverInfrastructure } from '../infrastructure/driver-infrastructure';
import { DriverResponse } from './dtos/driver.dto';

@Injectable({
  providedIn: 'root',
})
export class DriverApplication {
  constructor(
    @Inject(DriverInfrastructure) private readonly repository: DriverRepository
  ) {}

  create(driver: Driver): Observable<DriverResponse> {
    return (
      this.repository
        .create(driver)
        //.pipe(map((driver: Driver) => DriverDto.fromDomainToResponse(driver)));
        .pipe(map((driver: Driver) => plainToInstance(DriverResponse, driver)))
    );
    //return DriverDto.fromDomainToResponse(driver);
  }

  update(driver: Driver): Observable<Driver> {
    return this.repository.update(driver);
    //return DriverDto.fromDomainToResponse(driver);
  }

  delete(driver: Driver): Observable<Driver> {
    return this.repository.delete(driver);
    //return DriverDto.fromDomainToResponse(driver);
  }

  get(id: number): Observable<Driver> {
    return this.repository.get(id);
    //return '';
  }

  getAll(): Observable<Driver[]> {
    return this.repository.getAll();
    //return '';
  }
}
