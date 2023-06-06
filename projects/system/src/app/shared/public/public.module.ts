import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './components/container/container.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PaginatorComponent,
    RolesAllowedDirective,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    ContainerComponent,
    TitleComponent,
    TableComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    RolesAllowedDirective,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class PublicModule {}
