import { Component, Inject } from '@angular/core';

import { MyService } from '../app.module';
import { Movies } from '../models/movie';
import { MovieService } from '../services/Movie.service';

@Component({
  selector: 'amb-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  /*@Input()*/ moviesList?: Movies;

  constructor(@Inject(MyService) movieService: MovieService) {
    this.moviesList = movieService.info;
  }
}
