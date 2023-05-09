import { Observable } from 'rxjs';

export interface BaseRepository<Entity> {
  insert(entity: Partial<Entity>): Observable<any>;
  list(): Observable<Entity[]>;
  listOne(id: number): Observable<Entity>;
  update(id: number, entity: Partial<Entity>): Observable<any>;
  delete(id: number): Observable<any>;
  page(page: number): Observable<any>;
}
