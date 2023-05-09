import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { LottieModule } from 'ngx-lottie';

import environmentConfig from '../../assets/environment.json';
import { MaterialModule } from '../shared/material/material.module';
import { AuthApplication } from './application/auth.application';
import { StorageApplication } from './application/storage.application';
import { AuthInfrastructure } from './infrastructure/auth.infrastructure';
import { StorageInfrastructure } from './infrastructure/storage.infrastructure';
import { HeaderComponent } from './views/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { WaitComponent } from './views/wait/wait.component';

const application = [AuthApplication, StorageApplication];
const infrastructure = [AuthInfrastructure, StorageInfrastructure];

const RECAPTCHA_V2_DUMMY_KEY = environmentConfig.recaptchaKey;

// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    WaitComponent,
    PageLoginComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [
    ...application,
    ...infrastructure,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: RECAPTCHA_V2_DUMMY_KEY,
      } as RecaptchaSettings,
    },
  ],
  exports: [WaitComponent, HeaderComponent, MenuComponent],
})
export class CoreModule {}
