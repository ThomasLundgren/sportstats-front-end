import { TestBed } from '@angular/core/testing';

import { GetLeagueService } from './get-league.service';

describe('GetLeagueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLeagueService = TestBed.get(GetLeagueService);
    expect(service).toBeTruthy();
  });
});
