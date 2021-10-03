import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento2Component } from './departamento2.component';

describe('Departamento2Component', () => {
  let component: Departamento2Component;
  let fixture: ComponentFixture<Departamento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
