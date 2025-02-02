import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5AbstractionComponent } from './exercise5-abstraction.component';

describe('Exercise5AbstractionComponent', () => {
  let component: Exercise5AbstractionComponent;
  let fixture: ComponentFixture<Exercise5AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise5AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise5AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
