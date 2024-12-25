import { TestBed } from '@angular/core/testing';

import { SignalsLearningService } from './signals-learning.service';

describe('SignalsLearningService', () => {
  let service: SignalsLearningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalsLearningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
