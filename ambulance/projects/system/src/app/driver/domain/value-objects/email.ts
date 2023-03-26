export class EmailVO {
  private readonly value: string;

  private isValid(email: string): boolean {
    return !!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  }

  constructor(value: string) {
    if (!this.isValid(value)) throw new Error('El correo no es válido');
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}
