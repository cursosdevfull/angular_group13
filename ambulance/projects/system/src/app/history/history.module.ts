import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicModule } from '../shared/public/public.module';
import { HistoryRoutingModule } from './history-routing.module';
import { PageListComponent } from './views/pages/page-list/page-list.component';

@NgModule({
  declarations: [PageListComponent],
  imports: [CommonModule, HistoryRoutingModule, PublicModule],
})
export class HistoryModule {}
