import { Movies } from '../models/movie';

export class MovieService {
  info: Movies = {
    local: 'Cinemark',
    movies: [
      {
        title: 'Avengers: Endgame',
        date: '2019-04-24',
        time: '21:00',
        format: '3D',
        urlImage:
          'https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810',
      },
      {
        title: 'Avengers: Infinity War',
        date: '2018-04-25',
        time: '21:00',
        format: '2D',
        urlImage:
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fb1ede65688027.5afcac81af5e6.jpg',
      },
    ],
  };
}
