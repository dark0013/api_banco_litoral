import { TestBed } from '@angular/core/testing';

import { SpotitfyApiService } from './spotitfy-api.service';

describe('SpotitfyApiService', () => {
  let service: SpotitfyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotitfyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
