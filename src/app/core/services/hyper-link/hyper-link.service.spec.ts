import { TestBed } from '@angular/core/testing';

import { HyperLinkService } from './hyper-link.service';

describe('HyperLinkService', () => {
  let service: HyperLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyperLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
