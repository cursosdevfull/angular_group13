import { Observable } from 'rxjs';

import { DriverEntity } from '../entities/driver.entity';

export interface DriverRepository {
  getPage(page: number): Observable<any>;
  delete(id: number): Observable<any>;
  update(id: number, driver: DriverEntity): Observable<any>;
  insert(driver: DriverEntity): Observable<any>;
  list(): Observable<DriverEntity[]>;
}
