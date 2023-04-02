import { Observable } from 'rxjs';

import { Driver } from '../driver';

export interface DriverRepository {
  create(driver: Driver): Observable<Driver>;
  update(driver: Driver): Observable<Driver>;
  delete(driver: Driver): Observable<Driver>;
  get(id: number): Observable<Driver>;
  getAll(): Observable<Driver[]>;
}
