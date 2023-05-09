import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from '../../../helpers/CustomValidators';
import { AuthApplication } from '../../application/auth.application';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('password') inputPassword: ElementRef;
  title = 'system';
  visibility = false;

  fg: FormGroup;

  constructor(private readonly appAuth: AuthApplication) {
    this.initForm();
  }

  initForm() {
    this.fg = new FormGroup({
      email: new FormControl('', [Validators.required, CustomValidators.Email]),
      password: new FormControl('', [
        Validators.required,
        CustomValidators.Password('[\\w-]{3,}'),
      ]),
      recaptcha: new FormControl(null, Validators.required),
    });
  }

  showPassword() {
    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type === 'text' ? 'password' : 'text';
    this.visibility = !this.visibility;
  }

  login() {
    const { email, password, recaptcha } = this.fg.value;
    this.appAuth.login(email, password, recaptcha);
  }
}
