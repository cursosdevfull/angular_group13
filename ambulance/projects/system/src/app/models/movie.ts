export interface Movie {
  title: string;
  date: string;
  time: string;
  format: string;
  urlImage: string;
}

export interface Movies {
  local: string;
  movies: Movie[];
}
