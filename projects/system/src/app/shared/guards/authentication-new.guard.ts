import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthApplication } from '../../core/application/auth.application';

export const authenticationNewGuard = () => {
  const app: AuthApplication = inject(AuthApplication);
  const router: Router = inject(Router);

  const status: boolean = app.statusUserLoggedIn();

  if (!status) router.navigate(['/']);

  return status;
};
