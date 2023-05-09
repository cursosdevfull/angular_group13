import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseInfrastructure } from '../../base/infrastructure/base-infrastructure';
import { EnvironmentService } from '../../core/services/environment.service';
import { Medic } from '../domain/medic';
import { MedicRepository } from '../domain/repositories/medic.repository';

@Injectable()
export class MedicInfrastructure
  extends BaseInfrastructure<Medic>
  implements MedicRepository
{
  constructor(http: HttpClient, environment: EnvironmentService) {
    super(http, environment, 'medics');
  }
}
