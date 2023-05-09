import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { PublicModule } from '../shared/public/public.module';
import { MedicApplication } from './application/medic.application';
import { MedicInfrastructure } from './infrastructure/medic.infrastructure';
import { MedicRoutingModule } from './medic-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';

const application = [MedicApplication];
const infrastructure = [MedicInfrastructure];
@NgModule({
  declarations: [PageListComponent],
  imports: [CommonModule, MedicRoutingModule, PublicModule, MaterialModule],
  providers: [...application, ...infrastructure],
})
export class MedicModule {}
