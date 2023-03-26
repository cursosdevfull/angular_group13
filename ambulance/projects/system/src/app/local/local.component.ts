import { Component } from '@angular/core';

import { Movies } from '../models/movie';

@Component({
  selector: 'amb-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css'],
})
export class LocalComponent {
  info?: Movies;

  constructor(
    /* @Inject('MovieListService') movieService: MovieService,
    @Inject(MyService) myService: MovieService,
    //@Inject(MovieService) movieService2: MovieService
    movieService2: MovieService */
  ) {
    //this.info = movieService.info;
    //this.info = myService.info;
    //this.info = movieService2.info;
  }
}
