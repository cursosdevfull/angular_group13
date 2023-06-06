import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormDriverComponent } from './views/components/form-driver/form-driver.component';
import { PageContainerComponent } from './views/page/page-container/page-container.component';
import { PageListComponent } from './views/page/page-list/page-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageContainerComponent,
    children: [
      { path: '', component: PageListComponent },
      { path: 'edit/:id', component: FormDriverComponent },
      { path: 'create', component: FormDriverComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule {}
