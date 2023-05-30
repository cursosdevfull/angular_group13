import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UtilsService } from '../../shared/services/utils.service';
import { WaitService } from '../../shared/services/wait.service';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { StorageApplication } from './storage.application';

@Injectable()
export class AuthApplication {
  private isUserLoggedIn = false;

  constructor(
    @Inject(AuthInfrastructure) private readonly repository: AuthRepository,
    private readonly wait: WaitService,
    private readonly utils: UtilsService,
    private readonly appStorage: StorageApplication,
    private readonly router: Router
  ) {}

  login(email: string, password: string, recaptcha: string): void {
    this.wait.changeStatus(true);
    this.repository.login(email, password, recaptcha).subscribe((tokens) => {
      this.wait.changeStatus(false);
      if (!tokens) {
        this.utils.showNotify('Invalid credentials');
        return;
      } else {
        this.appStorage.setValue('accessToken', tokens.accessToken);
        this.appStorage.setValue('refreshToken', tokens.refreshToken);
        this.isUserLoggedIn = true;
        this.router.navigate(['/dashboard']);
      }
    });
  }

  statusUserLoggedIn(): boolean {
    const accessToken = this.appStorage.getValue('accessToken');
    const refreshToken = this.appStorage.getValue('refreshToken');

    return this.isUserLoggedIn || (!!accessToken && !!refreshToken);
  }

  logout(): void {
    this.appStorage.clear();
    this.isUserLoggedIn = false;
    this.router.navigate(['/']);
  }

  getNewAccessToken(refreshToken: string) {
    return this.repository.getNewAccessToken(refreshToken);
  }
}
