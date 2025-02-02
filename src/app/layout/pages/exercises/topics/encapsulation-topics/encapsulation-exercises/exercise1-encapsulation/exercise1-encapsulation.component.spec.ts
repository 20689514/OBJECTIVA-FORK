import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1EncapsulationComponent } from './exercise1-encapsulation.component';

describe('Exercise1EncapsulationComponent', () => {
  let component: Exercise1EncapsulationComponent;
  let fixture: ComponentFixture<Exercise1EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise1EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise1EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
