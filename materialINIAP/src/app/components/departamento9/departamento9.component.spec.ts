
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Departamento9Component } from './departamento9.component';

describe('Departamento9Component', () => {
  let component: Departamento9Component;
  let fixture: ComponentFixture<Departamento9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Departamento9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Departamento9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
