import { Driver } from '../domain/driver';
import { DriverRepository } from '../domain/repositories/driver-repository';

export class DriverInfrastructure implements DriverRepository {
  create(driver: Driver) {
    throw new Error('Method not implemented.');
  }
  update(driver: Driver) {
    throw new Error('Method not implemented.');
  }
  delete(driver: Driver) {
    throw new Error('Method not implemented.');
  }
  get(id: number): Driver {
    throw new Error('Method not implemented.');
  }
  getAll(): Driver[] {
    throw new Error('Method not implemented.');
  }
}
