import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { CustomValidators } from '../../../helpers/CustomValidators';
import { AuthApplication } from '../../application/auth.application';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild(HeaderComponent) header: HeaderComponent;
  @ViewChildren(HeaderComponent) headers: QueryList<HeaderComponent>;
  fg: FormGroup;

  domainsAllowed = ['domain1.com', 'domain2.com', 'domain3.com'];

  constructor(private readonly application: AuthApplication) {
    this.application.login('email', 'password').subscribe({
      next: (tokens) => console.log(tokens),
    });

    this.initForm();
  }

  initForm() {
    this.fg = new FormGroup(
      {
        email: new FormControl(null, [
          Validators.required,
          //Validators.pattern('[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}'),
          //Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i),
          //this.validatorDomainEmail(),
          //this.validatorFnForDomainCompany.bind(this),
          CustomValidators.Email,
          CustomValidators.OnlyDomainCompany(this.domainsAllowed),
        ]),
        password: new FormControl(null, [
          Validators.required,
          CustomValidators.Password('^[\\w-]{5,}$'),
          //CustomValidators.MatchPassword,
          //Validators.pattern(/^[\w-]{5,}$/i),
        ]),
        confirmPassword: new FormControl(null, [
          Validators.required,
          CustomValidators.Password('^[\\w-]{5,}$'),
          //CustomValidators.MatchPassword,
        ]),
      },
      CustomValidators.MatchPasswordForm
    );
  }

  ngAfterViewInit() {
    this.headers.forEach((header) => {
      console.log('idComponent', header.idComponent);
    });
  }

  login() {
    //const email = this.email.nativeElement.value;
    //const password = this.password.nativeElement.value;
    /*     const email = this.fg.get('email').value;
    const password = this.fg.get('password').value; */

    const { email, password } = this.fg.value;
    //const { email, password } = this.fg.getRawValue();

    console.log(this.fg);

    //if (email && password) {
    if (!this.fg.invalid) {
      this.application.login(email, password).subscribe({
        next: (tokens) => console.log(tokens),
      });
    } else {
      console.log('Datos inválidos');
    }
  }

  validatorDomainEmail(): ValidatorFn {
    return (control: AbstractControl): Record<string, any> | null => {
      const email = control.value;

      if (!email) return null;

      const domain = email.split('@')[1].toLowerCase();
      if (this.domainsAllowed.includes(domain)) return null;

      return {
        invalidDomain: 'only allowed domain1.com, domain2.com, domain3.com',
      };
    };
  }

  validatorFnForDomainCompany(
    control: AbstractControl
  ): Record<string, any> | null {
    const email = control.value;

    if (!email) return null;

    const domain = email.split('@')[1];
    if (this.domainsAllowed.includes(domain)) return null;

    return {
      invalidDomain: 'only allowed domain1.com, domain2.com, domain3.com',
    };
  }
}
