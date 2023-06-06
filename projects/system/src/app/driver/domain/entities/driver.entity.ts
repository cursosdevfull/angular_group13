export type DriverPropertiesRequired = {
  readonly nombre: string;
};

export type DriverPropertiesOptional = {
  readonly id: number;
};

export type DriverProperties = DriverPropertiesRequired &
  Partial<DriverPropertiesOptional>;

export class DriverEntity {
  private readonly id: number | null = null;
  private nombre: string;

  constructor(properties: DriverProperties) {
    Object.assign(this, properties);
  }

  get properties(): DriverProperties {
    return {
      id: this.id,
      nombre: this.nombre,
    };
  }
}
