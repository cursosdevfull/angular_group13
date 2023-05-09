import jwtDecode from 'jwt-decode';

import { StorageRepository } from '../domain/repositories/storage.repository';

export class StorageInfrastructure implements StorageRepository {
  setStorage(name: string, value: string): void {
    sessionStorage.setItem(name, value);
  }
  getStorage(name: string): string {
    return sessionStorage.getItem(name);
  }
  clear(): void {
    sessionStorage.clear();
  }
  getFieldInToken(field: 'name' | 'email') {
    const token = this.getStorage('accessToken');
    if (!token) return null;

    const decode = jwtDecode<{ name: string; email: string }>(token);

    return decode[field];
  }
}
