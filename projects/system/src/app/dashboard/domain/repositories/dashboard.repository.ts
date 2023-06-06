import { Observable } from 'rxjs';

import { DataCovid } from '../../infrastructure/dtos/api-covid.dto';

export interface DashboardRepository {
  getCovidData(): Observable<DataCovid[]>;
  listen(eventName: string): Observable<any>;
}
