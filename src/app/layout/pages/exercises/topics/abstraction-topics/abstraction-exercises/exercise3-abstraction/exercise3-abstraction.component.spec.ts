import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3AbstractionComponent } from './exercise3-abstraction.component';

describe('Exercise3AbstractionComponent', () => {
  let component: Exercise3AbstractionComponent;
  let fixture: ComponentFixture<Exercise3AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise3AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise3AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
