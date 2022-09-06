import { TestBed } from '@angular/core/testing';

import { SegurancaService } from './seguranca.service';

describe('SegurancaService', () => {
  let service: SegurancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SegurancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
