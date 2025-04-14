import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authrizGuard } from './authriz.guard';

describe('authrizGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authrizGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
