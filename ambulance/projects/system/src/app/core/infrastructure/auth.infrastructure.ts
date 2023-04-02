import { Observable, of } from 'rxjs';

import { Tokens } from '../domain/entities/tokens.entity';
import { AuthRepository } from '../domain/repositories/auth.repository';

export class AuthInfrastructure implements AuthRepository {
  login(email: string, password: string): Observable<Tokens> {
    return of({
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNlcmdpbyBIaWRhbGdvIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTE2MjM5MDIyfQ.-dIlKqwpF_uvNgxELeyIc_SPnUAcYE8NeF6k_lIDAZM',
      refreshToken: 'c68f9a2f-94f3-47ca-83b1-462343f635a3',
    });
  }
}
