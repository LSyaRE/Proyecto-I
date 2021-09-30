import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablesComponent } from './estables.component';

describe('EstablesComponent', () => {
  let component: EstablesComponent;
  let fixture: ComponentFixture<EstablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
