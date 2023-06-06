import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MaterialModule } from '../shared/material/material.module';
import { PublicModule } from '../shared/public/public.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CovidComponent } from './views/components/covid/covid.component';
import { SocketComponent } from './views/components/socket/socket.component';
import { PageDashboardComponent } from './views/page/page-dashboard/page-dashboard.component';

@NgModule({
  declarations: [PageDashboardComponent, CovidComponent, SocketComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PublicModule,
    NgxChartsModule,
    MaterialModule,
  ],
})
export class DashboardModule {}
