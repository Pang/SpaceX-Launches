import { TestBed } from '@angular/core/testing';

import { SpacexAPIService } from './spacex-api.service';

describe('SpacexAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacexAPIService = TestBed.get(SpacexAPIService);
    expect(service).toBeTruthy();
  });
});
