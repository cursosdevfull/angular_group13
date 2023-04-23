import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';

import { MaterialModule } from '../shared/material/material.module';
import { AuthApplication } from './application/auth.application';
import { AuthInfrastructure } from './infrastructure/auth.infrastructure';
import { HeaderComponent } from './views/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views/menu/menu.component';
import { PageLoginComponent } from './views/pages/page-login/page-login.component';
import { WaitComponent } from './views/wait/wait.component';

const application = [AuthApplication];
const infrastructure = [AuthInfrastructure];

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
  ],
  providers: [...application, ...infrastructure],
  exports: [WaitComponent, HeaderComponent, MenuComponent],
})
export class CoreModule {}
