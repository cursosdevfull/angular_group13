export interface DriverEssentials {
  nombre: string;
  correo: string;
}

export interface DriverOptional {
  id: number;
  seguro: string;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type DriverProperties = DriverEssentials & Partial<DriverOptional>;

export type DriverUpdate = Partial<Omit<DriverProperties, 'id'>>;

/* export interface DriverUpdate {
    nombre: string;
    seguro: string;
}
 */
export class Driver {
  private readonly id: number;
  private correo: string;
  private nombre: string;
  private seguro: string;
  private activo: boolean;
  private readonly createdAt: Date;
  private updatedAt?: Date;
  private deletedAt?: Date;

  constructor(properties: DriverProperties) {
    Object.assign(this, properties);
    /*     this.id = properties.id;
    this.nombre = properties.nombre;
 */ this.activo = true;
    this.createdAt = new Date();
  }

  get properties(): DriverProperties {
    return {
      id: this.id,
      nombre: this.nombre,
      correo: this.correo,
      seguro: this.seguro,
      activo: this.activo,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }

  update(propertiesToUpdate: DriverUpdate) {
    this.updatedAt = new Date();
    Object.assign(this, propertiesToUpdate);
  }

  delete() {
    this.deletedAt = new Date();
    this.activo = false;
  }
}
/* 
const driverInfo: DriverProperties = { id: 10, nombre: 'Juan' };

const driver = new Driver(driverInfo); */
