import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1AbstractionComponent } from './exercise1-abstraction.component';

describe('Exercise1AbstractionComponent', () => {
  let component: Exercise1AbstractionComponent;
  let fixture: ComponentFixture<Exercise1AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise1AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise1AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
