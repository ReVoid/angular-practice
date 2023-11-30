import { TestBed } from '@angular/core/testing';

import { LoadingIndicationService } from './loading-indication.service';

describe('LoadingIndicationService', () => {
  let service: LoadingIndicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingIndicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
