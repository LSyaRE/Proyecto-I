import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento4Component } from './departamento4.component';

describe('Departamento4Component', () => {
  let component: Departamento4Component;
  let fixture: ComponentFixture<Departamento4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
