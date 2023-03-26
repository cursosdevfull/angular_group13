import { Component, Input } from '@angular/core';

import { Movie } from '../models/movie';

@Component({
  selector: 'amb-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie!: Movie;
}
