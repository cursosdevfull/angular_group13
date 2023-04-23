import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './components/container/container.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [ContainerComponent, TitleComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ContainerComponent, TitleComponent],
})
export class PublicModule {}
