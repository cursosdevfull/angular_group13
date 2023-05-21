import { Exclude, Expose } from 'class-transformer';

export class MedicListResponse {
  id: number;

  @Expose({ name: 'nombre' })
  name: string;

  @Expose({ name: 'segundo_nombre' })
  surname: string;

  @Expose({ name: 'apellido' })
  lastName: string;

  cmp: string;

  dni: string;

  @Expose({ name: 'correo' })
  email: string;

  @Expose({ name: 'foto' })
  photo: string;

  @Exclude()
  activo: boolean;
}
