import { TestBed } from '@angular/core/testing';

import { InventarioResolver } from './inventario.resolver';

describe('InventarioResolver', () => {
  let resolver: InventarioResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InventarioResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
