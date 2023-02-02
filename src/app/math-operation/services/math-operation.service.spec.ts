import { TestBed } from '@angular/core/testing';

import { MathOperationService } from './math-operation.service';

describe('MathOperationService', () => {
  let service: MathOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
