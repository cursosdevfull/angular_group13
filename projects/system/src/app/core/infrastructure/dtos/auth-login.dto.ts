export interface AuthLoginRequest {
  correo: string;
  password: string;
  recaptchaReactive: string;
}

export class AuthLoginDto {
  static fromDomainToData(
    email: string,
    password: string,
    recaptcha: string
  ): AuthLoginRequest {
    return {
      correo: email,
      password,
      recaptchaReactive: recaptcha,
    };
  }
}
