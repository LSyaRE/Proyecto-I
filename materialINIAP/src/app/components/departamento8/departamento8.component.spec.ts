import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento8Component } from './departamento8.component';

describe('Departamento8Component', () => {
  let component: Departamento8Component;
  let fixture: ComponentFixture<Departamento8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
