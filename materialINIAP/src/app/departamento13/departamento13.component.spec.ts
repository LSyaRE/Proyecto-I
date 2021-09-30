import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento13Component } from './departamento13.component';

describe('Departamento13Component', () => {
  let component: Departamento13Component;
  let fixture: ComponentFixture<Departamento13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
