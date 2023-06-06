import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EnvironmentService } from '../../core/services/environment.service';
import { DriverRepository } from '../domain/repositories/driver.repository';

@Injectable()
export class DriverInfrastructure implements DriverRepository {
  constructor(
    private readonly http: HttpClient,
    private readonly environment: EnvironmentService
  ) {}

  getPage(page: number): Observable<any> {
    return this.http.get(
      `${this.environment.parameters.apiPath}/drivers/page/${page}/${this.environment.parameters.pageSize}`
    );
  }
  delete(id: number): Observable<any> {
    return this.http.delete(
      `${this.environment.parameters.apiPath}/drivers/${id}`
    );
  }

  update(id: number, driver: any): Observable<any> {
    return this.http.put(
      `${this.environment.parameters.apiPath}/drivers/${id}`,
      driver
    );
  }

  insert(driver: any): Observable<any> {
    return this.http.post(
      `${this.environment.parameters.apiPath}/drivers`,
      driver
    );
  }

  list(): Observable<any> {
    return this.http.get(`${this.environment.parameters.apiPath}/drivers`);
  }
}
