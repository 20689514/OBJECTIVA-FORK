import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1InheritanceComponent } from './exercise1-inheritance.component';

describe('Exercise1InheritanceComponent', () => {
  let component: Exercise1InheritanceComponent;
  let fixture: ComponentFixture<Exercise1InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise1InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise1InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
