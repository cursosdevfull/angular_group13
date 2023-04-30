export class AuthValidation {
  static validateParameters(email: string, password: string) {
    if (!email && this.validateEmail(email)) return new Error('Invalid email');
    if (!password && this.validatePassword(password))
      return new Error('Invalid password');

    return true;
  }

  static validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  static validatePassword(password: string) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
  }
}
