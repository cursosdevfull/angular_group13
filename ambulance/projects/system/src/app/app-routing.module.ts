import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageLoginComponent } from './core/views/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'medic',
    loadChildren: () =>
      import('./medic/medic.module').then((m) => m.MedicModule),
  },
  {
    path: 'driver',
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
