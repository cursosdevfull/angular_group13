import { Observable } from 'rxjs';

import { Tokens } from '../entities/tokens.entity';

export interface AuthRepository {
  login(
    email: string,
    password: string,
    recaptcha: string
  ): Observable<Tokens | null>;

  getNewAccessToken(refreshToken: string): Observable<Tokens>;
}
