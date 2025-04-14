import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notAuthrizGuard } from './not-authriz.guard';

describe('notAuthrizGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notAuthrizGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
