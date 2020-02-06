import { TestBed } from '@angular/core/testing';

import { MovieGuardService } from './movie-guard.service';

describe('MovieGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieGuardService = TestBed.get(MovieGuardService);
    expect(service).toBeTruthy();
  });
});
