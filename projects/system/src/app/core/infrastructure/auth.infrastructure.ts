import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Tokens } from '../domain/entities/tokens.entity';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { EnvironmentService } from '../services/environment.service';
import { AuthLoginDto } from './dtos/auth-login.dto';

@Injectable()
export class AuthInfrastructure implements AuthRepository {
  constructor(
    private http: HttpClient,
    private environment: EnvironmentService
  ) {}

  login(
    email: string,
    password: string,
    recaptcha: string
  ): Observable<Tokens | null> {
    const data = AuthLoginDto.fromDomainToData(email, password, recaptcha);
    return this.http.post<Tokens>(
      `${this.environment.parameters.apiPath}/users/login`,
      data
    );

    /*  const userFound = userMock.find(
      (user) => user.email === email && user.password === password
    );

    const obs = userFound
      ? of({
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNlcmdpbyBIaWRhbGdvIiwicm9sZXMiOlsiYWRtaW4iXSwiaWF0IjoxNTE2MjM5MDIyfQ.-dIlKqwpF_uvNgxELeyIc_SPnUAcYE8NeF6k_lIDAZM',
          refreshToken: 'c68f9a2f-94f3-47ca-83b1-462343f635a3',
        })
      : of(null);

    return obs.pipe(delay(1000)); */
  }
}
