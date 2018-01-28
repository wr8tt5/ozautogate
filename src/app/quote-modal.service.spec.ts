import { TestBed, inject } from '@angular/core/testing';

import { QuoteModalService } from './quote-modal.service';

describe('QuoteModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteModalService]
    });
  });

  it('should be created', inject([QuoteModalService], (service: QuoteModalService) => {
    expect(service).toBeTruthy();
  }));
});
