import { Component } from '@angular/core';

import { AuthApplication } from '../../application/auth.application';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private readonly application: AuthApplication) {
    this.application.login('email', 'password').subscribe({
      next: (tokens) => console.log(tokens),
    });
  }
}
