/*
    name, secondName, lastname, cmp, email, document, photo, active, id
*/

export interface MedicRequired {
  readonly name: string;
  readonly secondName: string;
  readonly lastname: string;
  readonly cmp: string;
  readonly email: string;
  readonly document: string;
}

export interface MedicOptional {
  readonly id: number;
  readonly photo: string;
  readonly active: boolean;
}

export type MedicUpdate = Partial<MedicRequired> &
  Partial<Omit<MedicOptional, 'id active'>>;

export type MedicProperties = MedicRequired & Partial<MedicOptional>;

export class Medic {
  private readonly id: number;
  private name: string;
  private secondName: string;
  private lastname: string;
  private cmp: string;
  private email: string;
  private document: string;
  private photo: string;
  private active: boolean;

  constructor(properties: MedicProperties) {
    Object.assign(this, properties);
    this.active = true;
  }

  properties(): MedicProperties {
    return {
      id: this.id,
      name: this.name,
      secondName: this.secondName,
      lastname: this.lastname,
      cmp: this.cmp,
      email: this.email,
      document: this.document,
      photo: this.photo,
      active: this.active,
    };
  }

  update(properties: MedicUpdate) {
    Object.assign(this, properties);
  }

  delete() {
    this.active = false;
  }
}
