import { TestBed, inject } from '@angular/core/testing';

import { UnlocodeService } from './unlocode.service';

describe('UnlcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnlocodeService]
    });
  });

  it('should be created', inject([UnlocodeService], (service: UnlocodeService) => {
    expect(service).toBeTruthy();
  }));
});
