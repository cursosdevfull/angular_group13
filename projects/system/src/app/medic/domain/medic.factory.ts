import { Medic, MedicProperties } from './medic';

export class MedicFactory {
  static create(properties: MedicProperties) {
    if (!properties.name) throw new Error('Name is required');
    if (!properties.secondName) throw new Error('Second name is required');
    if (!properties.lastname) throw new Error('Lastname is required');
    if (!properties.cmp) throw new Error('CMP is required');
    if (!properties.email) throw new Error('Email is required');
    if (!properties.document) throw new Error('Document is required');

    return new Medic(properties);
  }
}
