import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceExercisesComponent } from './inheritance-exercises.component';

describe('InheritanceExercisesComponent', () => {
  let component: InheritanceExercisesComponent;
  let fixture: ComponentFixture<InheritanceExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InheritanceExercisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
