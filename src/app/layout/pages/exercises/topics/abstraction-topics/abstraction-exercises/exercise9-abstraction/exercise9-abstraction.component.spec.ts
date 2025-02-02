import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise9AbstractionComponent } from './exercise9-abstraction.component';

describe('Exercise9AbstractionComponent', () => {
  let component: Exercise9AbstractionComponent;
  let fixture: ComponentFixture<Exercise9AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise9AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise9AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
