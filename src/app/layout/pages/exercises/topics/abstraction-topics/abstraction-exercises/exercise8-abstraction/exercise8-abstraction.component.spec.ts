import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise8AbstractionComponent } from './exercise8-abstraction.component';

describe('Exercise8AbstractionComponent', () => {
  let component: Exercise8AbstractionComponent;
  let fixture: ComponentFixture<Exercise8AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise8AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise8AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
