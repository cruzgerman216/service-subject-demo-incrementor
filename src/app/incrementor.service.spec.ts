import { TestBed } from '@angular/core/testing';

import { IncrementorService } from './incrementor.service';

describe('IncrementorService', () => {
  let service: IncrementorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
