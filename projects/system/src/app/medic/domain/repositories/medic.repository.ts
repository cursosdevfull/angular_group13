import { Observable } from 'rxjs';

import { BaseRepository } from '../../../base/domain/base-repository.interface';
import { MedicUpdateResponse } from '../entities/medic-response';
import { Medic } from '../medic';

export interface MedicRepository extends BaseRepository<Medic> {
  updateResponse(id: number, entity: Partial<MedicUpdateResponse>): Observable<any>;
}
