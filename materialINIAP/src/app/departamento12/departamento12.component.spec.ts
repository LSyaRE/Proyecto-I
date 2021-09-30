import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento12Component } from './departamento12.component';

describe('Departamento12Component', () => {
  let component: Departamento12Component;
  let fixture: ComponentFixture<Departamento12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
