import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Tokens } from '../domain/entities/tokens.entity';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';

@Injectable()
export class AuthApplication {
  constructor(
    @Inject(AuthInfrastructure) private readonly repository: AuthRepository
  ) {}

  login(email: string, password: string): Observable<Tokens> {
    return this.repository.login(email, password);
  }
}
