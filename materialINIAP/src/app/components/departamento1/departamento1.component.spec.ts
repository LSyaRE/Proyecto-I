import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento1Component } from './departamento1.component';

describe('Departamento1Component', () => {
  let component: Departamento1Component;
  let fixture: ComponentFixture<Departamento1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
