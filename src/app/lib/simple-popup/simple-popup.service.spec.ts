import { TestBed, inject } from '@angular/core/testing';

import { SimplePopupService } from './simple-popup.service';

describe('SimplePopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimplePopupService]
    });
  });

  it('should be created', inject([SimplePopupService], (service: SimplePopupService) => {
    expect(service).toBeTruthy();
  }));
});
