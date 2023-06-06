import { Inject, Injectable } from '@angular/core';

import { DashboardRepository } from '../domain/repositories/dashboard.repository';
import { DashboardService } from '../infrastructure/dashboard.service';

@Injectable({ providedIn: 'root' })
export class DashboardApplication {
  constructor(
    @Inject(DashboardService) private readonly repository: DashboardRepository
  ) {}

  getDataCovid() {
    return this.repository.getCovidData();
  }

  listen(eventName: string) {
    return this.repository.listen(eventName);
  }
}
