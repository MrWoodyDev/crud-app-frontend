import { TestBed } from '@angular/core/testing';

import { AppReceiptsService } from './app-receipts.service';

describe('AppReceiptsService', () => {
  let service: AppReceiptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppReceiptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
