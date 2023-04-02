import { AuthValidation } from './services/validation';

export class Auth {
  private readonly email: string;
  private readonly password: string;

  constructor(email: string, password: string) {
    if (AuthValidation.validateParameters(email, password)) {
      this.email = email;
      this.password = password;
    }
  }

  get properties() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
