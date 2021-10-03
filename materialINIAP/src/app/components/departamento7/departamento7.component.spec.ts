import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento7Component } from './departamento7.component';

describe('Departamento7Component', () => {
  let component: Departamento7Component;
  let fixture: ComponentFixture<Departamento7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
