import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthApplication } from './application/auth.application';
import { AuthInfrastructure } from './infrastructure/auth.infrastructure';
import { LoginComponent } from './views/login/login.component';

const application = [AuthApplication];
const infrastructure = [AuthInfrastructure];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],
  providers: [...application, ...infrastructure],
  exports: [LoginComponent],
})
export class CoreModule {}
