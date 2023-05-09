import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnvironmentService } from '../../core/services/environment.service';

export class BaseInfrastructure<Entity> {
  constructor(
    private readonly http: HttpClient,
    private environment: EnvironmentService,
    private readonly endpointName: string
  ) {}

  insert(entity: Entity): Observable<any> {
    return this.http.post(
      `${this.environment.parameters.apiPath}/${this.endpointName}`,
      entity
    );
  }
  list(): Observable<Entity[]> {
    return this.http.get<Entity[]>(
      `${this.environment.parameters.apiPath}/${this.endpointName}`
    );
  }
  listOne(id: number): Observable<Entity> {
    return this.http.get<Entity>(
      `${this.environment.parameters.apiPath}/${this.endpointName}/${id}`
    );
  }
  update(id: number, entity: Entity): Observable<any> {
    return this.http.put(
      `${this.environment.parameters.apiPath}/${this.endpointName}`,
      entity
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(
      `${this.environment.parameters.apiPath}/${this.endpointName}/${id}`
    );
  }
  page(page: number): Observable<any> {
    return this.http.get<Entity>(
      `${this.environment.parameters.apiPath}/${this.endpointName}/page/${page}/${this.environment.parameters.pageSize}`
    );
  }
}
