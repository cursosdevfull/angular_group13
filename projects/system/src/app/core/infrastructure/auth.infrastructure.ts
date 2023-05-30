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
  }

  getNewAccessToken(refreshToken: string): Observable<Tokens> {
    return this.http.get<Tokens>(
      `${this.environment.parameters.apiPath}/users/refresh/${refreshToken}`
    );
  }
}
