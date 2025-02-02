import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5InheritanceComponent } from './exercise5-inheritance.component';

describe('Exercise5InheritanceComponent', () => {
  let component: Exercise5InheritanceComponent;
  let fixture: ComponentFixture<Exercise5InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise5InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise5InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
