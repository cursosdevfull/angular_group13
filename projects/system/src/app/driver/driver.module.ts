import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';
import { PublicModule } from '../shared/public/public.module';
import { DriverApplication } from './application/driver.application';
import { DriverRoutingModule } from './driver-routing.module';
import { DriverInfrastructure } from './infrastructure/driver.infrastructure';
import { PageListComponent } from './views/page/page-list/page-list.component';
import { PageContainerComponent } from './views/page/page-container/page-container.component';
import { FormDriverComponent } from './views/components/form-driver/form-driver.component';

@NgModule({
  declarations: [PageListComponent, PageContainerComponent, FormDriverComponent],
  imports: [CommonModule, DriverRoutingModule, PublicModule, MaterialModule],
  providers: [DriverApplication, DriverInfrastructure],
})
export class DriverModule {}
