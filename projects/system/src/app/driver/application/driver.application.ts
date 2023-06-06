import { Inject, Injectable } from '@angular/core';

import { DriverRepository } from '../domain/repositories/driver.repository';
import { DriverInfrastructure } from '../infrastructure/driver.infrastructure';

@Injectable()
export class DriverApplication {
  constructor(
    @Inject(DriverInfrastructure) private readonly repository: DriverRepository
  ) {}

  getPage(page: number) {
    return this.repository.getPage(page);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  update(id: number, driver: any) {
    return this.repository.update(id, driver);
  }

  insert(driver: any) {
    return this.repository.insert(driver);
  }

  list() {
    return this.repository.list();
  }
}
