import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageLoginComponent } from './core/views/pages/page-login/page-login.component';
import { authenticationNewGuard } from './shared/guards/authentication-new.guard';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    canLoad: [() => authenticationNewGuard()],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'medic',
    canLoad: [() => authenticationNewGuard()],
    loadChildren: () =>
      import('./medic/medic.module').then((m) => m.MedicModule),
  },
  {
    path: 'driver',
    canLoad: [() => authenticationNewGuard()],
    loadChildren: () =>
      import('./driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'history',
    canLoad: [() => authenticationNewGuard()],
    loadChildren: () =>
      import('./history/history.module').then((m) => m.HistoryModule),
  },
  {
    path: 'user',
    canLoad: [AuthenticationGuard],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
