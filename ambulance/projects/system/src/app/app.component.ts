import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from './helpers/CustomValidators';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('password') inputPassword: ElementRef;
  title = 'system';
  visibility = false;

  fg: FormGroup;

  constructor() {
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
}
