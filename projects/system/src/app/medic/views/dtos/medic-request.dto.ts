export abstract class MedicRequestDto {
  static convert(origin: any) {
    return {
      nombre: origin.name,
      segundo_nombre: origin.surname,
      apellido: origin.lastname,
      cmp: origin.cmp,
      dni: origin.dni,
      correo: origin.email,
    };
  }
}
