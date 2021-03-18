import { TestBed } from '@angular/core/testing';

import { IubCookieSolutionService } from './iub-cookie-solution.service';

describe('IubCookieSolutionService', () => {
  let service: IubCookieSolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IubCookieSolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
