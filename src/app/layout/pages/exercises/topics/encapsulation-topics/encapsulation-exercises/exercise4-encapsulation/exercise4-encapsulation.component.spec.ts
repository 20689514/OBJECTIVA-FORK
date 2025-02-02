import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4EncapsulationComponent } from './exercise4-encapsulation.component';

describe('Exercise4EncapsulationComponent', () => {
  let component: Exercise4EncapsulationComponent;
  let fixture: ComponentFixture<Exercise4EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise4EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise4EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
