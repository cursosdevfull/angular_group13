import { Inject, Injectable } from '@angular/core';

import { Driver } from '../domain/driver';
import { DriverRepository } from '../domain/repositories/driver-repository';
import { DriverInfrastructure } from '../infrastructure/driver-infrastructure';
import { DriverDto, DriverResponse } from './dtos/driver.dto';

@Injectable({
  providedIn: 'root',
})
export class DriverApplication {
  constructor(
    @Inject(DriverInfrastructure) private readonly repository: DriverRepository
  ) {}

  create(driver: Driver): DriverResponse {
    this.repository.create(driver);
    return DriverDto.fromDomainToResponse(driver);
  }

  update(driver: Driver): DriverResponse {
    this.repository.update(driver);
    return DriverDto.fromDomainToResponse(driver);
  }

  delete(driver: Driver): DriverResponse {
    this.repository.delete(driver);
    return DriverDto.fromDomainToResponse(driver);
  }

  get(id: number) {
    this.repository.get(id);
    return '';
  }

  getAll() {
    this.repository.getAll();
    return '';
  }
}
