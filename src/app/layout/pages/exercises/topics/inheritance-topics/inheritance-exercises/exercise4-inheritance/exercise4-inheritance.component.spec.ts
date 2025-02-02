import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4InheritanceComponent } from './exercise4-inheritance.component';

describe('Exercise4InheritanceComponent', () => {
  let component: Exercise4InheritanceComponent;
  let fixture: ComponentFixture<Exercise4InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise4InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise4InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
