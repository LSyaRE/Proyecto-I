import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departamento5Component } from './departamento5.component';

describe('Departamento5Component', () => {
  let component: Departamento5Component;
  let fixture: ComponentFixture<Departamento5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
