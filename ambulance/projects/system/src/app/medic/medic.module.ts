import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicModule } from '../shared/public/public.module';
import { MedicRoutingModule } from './medic-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';

@NgModule({
  declarations: [PageListComponent],
  imports: [CommonModule, MedicRoutingModule, PublicModule],
})
export class MedicModule {}
