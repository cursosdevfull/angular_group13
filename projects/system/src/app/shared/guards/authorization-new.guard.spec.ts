import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authorizationNewGuard } from './authorization-new.guard';

describe('authorizationNewGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authorizationNewGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
