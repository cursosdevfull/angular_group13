import { NgModule } from '@angular/core';

import { DriverInfrastructure } from './infrastructure/driver-infrastructure';
import { DriverForm } from './views/dumbs/driver-form/driver-form.component';

const infrastructure = [DriverInfrastructure];

@NgModule({
  declarations: [DriverForm],
  imports: [],
  providers: [...infrastructure],
  bootstrap: [],
  exports: [DriverForm],
})
export class DriverModule {}
