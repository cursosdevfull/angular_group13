import { delay, Observable, of } from 'rxjs';

import { Tokens } from '../domain/entities/tokens.entity';
import { AuthRepository } from '../domain/repositories/auth.repository';
import userMock from './user.mock.json';

export class AuthInfrastructure implements AuthRepository {
  login(email: string, password: string): Observable<Tokens | null> {
    const userFound = userMock.find(
      (user) => user.email === email && user.password === password
    );

    const obs = userFound
      ? of({
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNlcmdpbyBIaWRhbGdvIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTE2MjM5MDIyfQ.-dIlKqwpF_uvNgxELeyIc_SPnUAcYE8NeF6k_lIDAZM',
          refreshToken: 'c68f9a2f-94f3-47ca-83b1-462343f635a3',
        })
      : of(null);

    return obs.pipe(delay(4000));
  }
}
