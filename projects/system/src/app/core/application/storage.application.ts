import { Inject, Injectable } from '@angular/core';

import { StorageRepository } from '../domain/repositories/storage.repository';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';

@Injectable()
export class StorageApplication {
  constructor(
    @Inject(StorageInfrastructure) private readonly storage: StorageRepository
  ) {}

  setValue(name: string, value: string) {
    this.storage.setStorage(name, value);
  }

  getValue(name: string): string {
    return this.storage.getStorage(name);
  }

  clear(): void {
    this.storage.clear();
  }

  getFieldInToken(field: 'name' | 'email' | 'roles') {
    return this.storage.getFieldInToken(field);
  }
}
