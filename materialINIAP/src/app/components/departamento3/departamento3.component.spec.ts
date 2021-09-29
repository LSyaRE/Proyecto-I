import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento3Component } from './departamento3.component';

describe('Departamento3Component', () => {
  let component: Departamento3Component;
  let fixture: ComponentFixture<Departamento3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
