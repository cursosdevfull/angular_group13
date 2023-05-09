import { BaseRepository } from '../domain/base-repository.interface';

export class BaseApplication<
  Entity,
  Repository extends BaseRepository<Entity>
> {
  constructor(readonly repository: Repository) {}

  list() {
    return this.repository.list();
  }

  page(page: number) {
    return this.repository.page(page);
  }

  update(id: number, entity: Partial<Entity>) {
    return this.repository.update(id, entity);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  listOne(id: number) {
    return this.repository.listOne(id);
  }

  insert(entity: Partial<Entity>) {
    return this.repository.insert(entity);
  }
}
