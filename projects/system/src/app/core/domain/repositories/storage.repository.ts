export interface StorageRepository {
  setStorage(name: string, value: string): void;
  getStorage(name: string): string | null;
  clear(): void;
  getFieldInToken(field: string): any;
}
