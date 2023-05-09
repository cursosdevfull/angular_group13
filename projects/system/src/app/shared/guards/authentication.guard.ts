import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { AuthApplication } from '../../core/application/auth.application';

@Injectable()
export class AuthenticationGuard implements CanLoad {
  constructor(
    private readonly app: AuthApplication,
    private readonly router: Router
  ) {}

  canLoad(): boolean {
    const status = this.app.statusUserLoggedIn();

    if (!status) {
      this.router.navigate(['/']);
    }

    return status;
  }
}
