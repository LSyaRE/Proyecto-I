import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento6Component } from './departamento6.component';

describe('Departamento6Component', () => {
  let component: Departamento6Component;
  let fixture: ComponentFixture<Departamento6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
