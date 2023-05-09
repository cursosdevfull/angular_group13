import { Inject, Injectable } from '@angular/core';

import { BaseApplication } from '../../base/application/base-application';
import { Medic } from '../domain/medic';
import { MedicRepository } from '../domain/repositories/medic.repository';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';

@Injectable()
export class MedicApplication extends BaseApplication<Medic, MedicRepository> {
  constructor(
    @Inject(MedicInfrastructure) override readonly repository: MedicRepository
  ) {
    super(repository);
  }
}
