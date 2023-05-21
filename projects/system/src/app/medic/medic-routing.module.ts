import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { allowGuard } from '../shared/guards/allow.guard';
import { authorizationNewGuard } from '../shared/guards/authorization-new.guard';
import { deactivateGuard } from '../shared/guards/deactivate.guard';
import { MedicResolveNew } from '../shared/guards/medic-resolve-new.guard';
import { FormMedicComponent } from './views/components/form-medic/form-medic.component';
import { MedicForeignComponent } from './views/components/medic-foreign/medic-foreign.component';
import { MedicNationalComponent } from './views/components/medic-national/medic-national.component';
import { MedicSpecialtyComponent } from './views/components/medic-specialty/medic-specialty.component';
import { ValidateIdComponent } from './views/components/validate-id/validate-id.component';
import { PageListComponent } from './views/pages/page-list/page-list.component';

const routes: Routes = [
  { path: '', component: PageListComponent },
  {
    path: 'form',
    component: FormMedicComponent,
    //canActivate: [AuthorizationGuard],
    canActivateChild: [() => authorizationNewGuard()],
    children: [
      {
        path: 'validate',
        component: ValidateIdComponent,
        resolve: { info: () => MedicResolveNew() },
        canDeactivate: [deactivateGuard],
      },
    ],
  },
  {
    path: 'list',
    canMatch: [() => allowGuard('medic')],
    component: MedicNationalComponent,
  },
  {
    path: 'list',
    canMatch: [() => allowGuard('operator')],
    component: MedicForeignComponent,
  },
  {
    path: 'list',
    canMatch: [() => allowGuard('admin')],
    component: MedicSpecialtyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicRoutingModule {}
