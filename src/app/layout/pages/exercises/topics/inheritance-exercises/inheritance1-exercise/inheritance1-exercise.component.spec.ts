import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inheritance1ExerciseComponent } from './inheritance1-exercise.component';

describe('Inheritance1ExerciseComponent', () => {
  let component: Inheritance1ExerciseComponent;
  let fixture: ComponentFixture<Inheritance1ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inheritance1ExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inheritance1ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
