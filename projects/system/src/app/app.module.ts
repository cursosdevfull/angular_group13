import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LAYOUT_CONSTANTS } from './config/constants/layout.constant';
import { LayoutModule } from './config/modules/layout.module';
import { CoreModule } from './core/core.module';
import { Paginator } from './shared/classes/paginator';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
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
    HttpClientModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: Paginator },
    AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
