import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

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

  constructor(private readonly application: AuthApplication) {
    this.application.login('email', 'password').subscribe({
      next: (tokens) => console.log(tokens),
    });
  }

  ngAfterViewInit() {
    //console.log('idComponent', this.header.idComponent);

    this.headers.forEach((header) => {
      console.log('idComponent', header.idComponent);
    });
  }

  login() {
    const email = this.email.nativeElement.value;
    const password = this.password.nativeElement.value;

    if (email && password) {
      this.application.login(email, password).subscribe({
        next: (tokens) => console.log(tokens),
      });
    } else {
      console.log('Datos inválidos');
    }
  }
}
