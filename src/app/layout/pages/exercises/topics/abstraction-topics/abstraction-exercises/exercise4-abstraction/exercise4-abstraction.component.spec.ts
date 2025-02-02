import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4AbstractionComponent } from './exercise4-abstraction.component';

describe('Exercise4AbstractionComponent', () => {
  let component: Exercise4AbstractionComponent;
  let fixture: ComponentFixture<Exercise4AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise4AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise4AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
