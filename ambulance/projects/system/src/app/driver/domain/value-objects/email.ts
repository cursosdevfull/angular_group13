export class EmailVO {
  private readonly value: string;

  private static isValid(email: string): boolean {
    return !!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  }

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): EmailVO {
    if (!this.isValid(value)) throw new Error('El correo no es válido');
    return new EmailVO(value);
  }

  getValue(): string {
    return this.value;
  }
}
