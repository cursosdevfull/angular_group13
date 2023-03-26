import { Injectable } from '@angular/core';

import { Driver } from '../domain/driver';
import { DriverDto, DriverResponse } from './dtos/driver.dto';

@Injectable({
  providedIn: 'root',
})
export class DriverApplication {
  create(driver: Driver): DriverResponse {
    return DriverDto.fromDomainToResponse(driver);
  }

  update(driver: Driver): DriverResponse {
    return DriverDto.fromDomainToResponse(driver);
  }

  delete(driver: Driver): DriverResponse {
    return DriverDto.fromDomainToResponse(driver);
  }

  get(id: number) {
    return '';
  }

  getAll() {
    return '';
  }
}
