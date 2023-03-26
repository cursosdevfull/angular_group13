import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DriverModule } from './driver/driver.module';
import { LocalComponent } from './local/local.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { MovieService } from './services/Movie.service';
import { UserService } from './services/User.service';
import { ListUserComponent } from './user/list.component';
import { UserComponent } from './user/user.component';

export class MyService {}

export const myToken = new InjectionToken('My Token');
export const tokenUser = new InjectionToken('Token User');
export const myFactory = new InjectionToken('My Factory');
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ListUserComponent,
    ProductListComponent,
    ProductComponent,
    LocalComponent,
    MovieListComponent,
    MovieComponent,
  ],
  imports: [BrowserModule, DriverModule],
  providers: [
    { provide: 'MovieListService', useClass: MovieService }, // new MovieService()
    { provide: MyService, useClass: MovieService },
    //{ provide: MovieService, useClass: MovieService },
    MovieService,
    //{provide: UserService, useClass: UserService}
    UserService,
    { provide: myToken, useClass: UserService },
    { provide: tokenUser, useValue: ['ADMIN', 'MEDIC'] },
    {
      provide: myFactory,
      useFactory: (roles: string[]) => new MovieService(),
      deps: [tokenUser],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
