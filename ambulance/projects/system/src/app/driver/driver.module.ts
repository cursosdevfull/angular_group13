import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicModule } from '../shared/public/public.module';
import { DriverRoutingModule } from './driver-routing.module';
import { PageListComponent } from './views/page/page-list/page-list.component';

@NgModule({
  declarations: [PageListComponent],
  imports: [CommonModule, DriverRoutingModule, PublicModule],
})
export class DriverModule {}
