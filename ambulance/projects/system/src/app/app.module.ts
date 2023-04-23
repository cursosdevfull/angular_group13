import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LAYOUT_CONSTANTS } from './config/constants/layout.constant';
import { LayoutModule } from './config/modules/layout.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule.forRoot(LAYOUT_CONSTANTS),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
