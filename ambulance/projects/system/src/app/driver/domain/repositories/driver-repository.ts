import { Driver } from '../driver';

export interface DriverRepository {
  create(driver: Driver): any;
  update(driver: Driver): any;
  delete(driver: Driver): any;
  get(id: number): Driver;
  getAll(): Driver[];
}
