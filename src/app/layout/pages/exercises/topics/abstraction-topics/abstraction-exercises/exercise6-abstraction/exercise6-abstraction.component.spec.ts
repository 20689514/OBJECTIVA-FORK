import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise6AbstractionComponent } from './exercise6-abstraction.component';

describe('Exercise6AbstractionComponent', () => {
  let component: Exercise6AbstractionComponent;
  let fixture: ComponentFixture<Exercise6AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise6AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise6AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
