import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthApplication } from './application/auth.application';
import { AuthInfrastructure } from './infrastructure/auth.infrastructure';
import { HeaderComponent } from './views/header/header.component';
import { LoginComponent } from './views/login/login.component';

const application = [AuthApplication];
const infrastructure = [AuthInfrastructure];

@NgModule({
  declarations: [LoginComponent, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [...application, ...infrastructure],
  exports: [LoginComponent],
})
export class CoreModule {}
