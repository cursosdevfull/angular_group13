import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { PublicModule } from '../shared/public/public.module';
import { MedicApplication } from './application/medic.application';
import { MedicInfrastructure } from './infrastructure/medic.infrastructure';
import { MedicRoutingModule } from './medic-routing.module';
import { MedicForeignComponent } from './views/components/medic-foreign/medic-foreign.component';
import { MedicNationalComponent } from './views/components/medic-national/medic-national.component';
import { MedicSpecialtyComponent } from './views/components/medic-specialty/medic-specialty.component';
import { ValidateIdComponent } from './views/components/validate-id/validate-id.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';

const application = [MedicApplication];
const infrastructure = [MedicInfrastructure];
@NgModule({
  declarations: [
    PageListComponent,
    ValidateIdComponent,
    MedicNationalComponent,
    MedicForeignComponent,
    MedicSpecialtyComponent,
  ],
  imports: [
    CommonModule,
    MedicRoutingModule,
    PublicModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [...application, ...infrastructure],
})
export class MedicModule {}
