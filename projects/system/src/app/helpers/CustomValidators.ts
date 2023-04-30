import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static OnlyDomainCompany(domainsAllowed: string[]): ValidatorFn {
    return (control: AbstractControl): Record<string, any> | null => {
      const email = control.value;

      if (!email) return null;

      const domain = email.split('@')[1];
      if (domainsAllowed.includes(domain)) return null;

      return {
        invalidDomain: `only allowed ${domainsAllowed.join(', ')}`,
      };
    };
  }

  static Email(control: AbstractControl): Record<string, any> | null {
    const email = control.value;

    if (!email) return null;

    const regex = new RegExp(
      '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
    );

    if (regex.test(email)) return null;

    return {
      invalidEmail: 'invalid email',
    };
  }

  static Password(pattern: string): ValidatorFn {
    return (control: AbstractControl): Record<string, any> | null => {
      const password = control.value;

      if (!password) return null;

      const regex = new RegExp(pattern);

      const conditional = regex.test(password);

      if (regex.test(password)) return null;

      return {
        invalidPassword: {
          pattern,
          value: password,
        },
      };
    };
  }

  static MatchPassword(control: AbstractControl): Record<string, any> | null {
    const parent = control.parent;
    const passwordValue = parent?.get('password')?.value;
    const confirmValue = parent?.get('confirmPassword')?.value;

    if (!passwordValue || !confirmValue) return null;

    if (passwordValue === confirmValue) return null;

    return {
      notMatchPassword: 'password and confirm password not match',
    };
  }

  static MatchPasswordForm(fg: FormGroup): Record<string, any> | null {
    const passwordValue = fg?.get('password')?.value;
    const confirmValue = fg?.get('confirmPassword')?.value;

    if (!passwordValue || !confirmValue) return null;

    if (passwordValue === confirmValue) return null;

    return {
      notMatchPasswordForm: 'password and confirm password not match',
    };
  }
}
