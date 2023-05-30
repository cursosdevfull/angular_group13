import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseInfrastructure } from '../../base/infrastructure/base-infrastructure';
import { EnvironmentService } from '../../core/services/environment.service';
import { MedicUpdateResponse } from '../domain/entities/medic-response';
import { Medic } from '../domain/medic';
import { MedicRepository } from '../domain/repositories/medic.repository';

@Injectable()
export class MedicInfrastructure
  extends BaseInfrastructure<Medic>
  implements MedicRepository
{
  httpClient: HttpClient;
  environmentService: EnvironmentService;

  constructor(http: HttpClient, environment: EnvironmentService) {
    super(http, environment, 'medics');
    this.httpClient = http;
    this.environmentService = environment;
  }

  updateResponse(id: number, entity: Partial<MedicUpdateResponse>): any {
    return this.httpClient.put(
      `${this.environmentService.parameters.apiPath}/medics/${id}`,
      entity
    );
  }
}
