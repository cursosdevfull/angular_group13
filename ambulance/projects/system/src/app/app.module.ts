import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { MovieService } from './services/Movie.service';
import { ListUserComponent } from './user/list.component';
import { UserComponent } from './user/user.component';

export class MyService {}

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
  imports: [BrowserModule],
  providers: [
    { provide: 'MovieListService', useClass: MovieService }, // new MovieService()
    { provide: MyService, useClass: MovieService },
    //{ provide: MovieService, useClass: MovieService },
    MovieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
