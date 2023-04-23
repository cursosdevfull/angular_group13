import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicModule } from '../shared/public/public.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './views/page/page-dashboard/page-dashboard.component';

@NgModule({
  declarations: [PageDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, PublicModule],
})
export class DashboardModule {}
