import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento11Component } from './departamento11.component';

describe('Departamento11Component', () => {
  let component: Departamento11Component;
  let fixture: ComponentFixture<Departamento11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
