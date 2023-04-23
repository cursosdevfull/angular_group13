import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '../../../helpers/CustomValidators';
import { UtilsService } from '../../../shared/services/utils.service';
import { WaitService } from '../../../shared/services/wait.service';
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

  constructor(
    private readonly app: AuthApplication,
    private readonly utils: UtilsService,
    private readonly wait: WaitService /*     private readonly notify: MatSnackBar */,
    private readonly router: Router
  ) {
    this.initForm();
  }

  initForm() {
    this.fg = new FormGroup({
      email: new FormControl('', [Validators.required, CustomValidators.Email]),
      password: new FormControl('', [
        Validators.required,
        CustomValidators.Password('[\\w-]{5,}'),
      ]),
    });
  }

  showPassword() {
    this.inputPassword.nativeElement.type =
      this.inputPassword.nativeElement.type === 'text' ? 'password' : 'text';
    this.visibility = !this.visibility;
  }

  login() {
    const { email, password } = this.fg.value;

    this.wait.changeStatus(true);
    this.app.login(email, password).subscribe((tokens) => {
      this.wait.changeStatus(false);
      if (!tokens) {
        this.utils.showNotify('Invalid credentials');
        return;
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
