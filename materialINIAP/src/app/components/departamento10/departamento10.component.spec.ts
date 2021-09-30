import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento10Component } from './departamento10.component';

describe('Departamento10Component', () => {
  let component: Departamento10Component;
  let fixture: ComponentFixture<Departamento10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
