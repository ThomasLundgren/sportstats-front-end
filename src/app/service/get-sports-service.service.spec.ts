import { TestBed } from '@angular/core/testing';

import { GetSportsService } from './get-sports-service.service';

describe('GetSportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSportsService = TestBed.get(GetSportsService);
    expect(service).toBeTruthy();
  });
});
