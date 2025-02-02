import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise6InheritanceComponent } from './exercise6-inheritance.component';

describe('Exercise6InheritanceComponent', () => {
  let component: Exercise6InheritanceComponent;
  let fixture: ComponentFixture<Exercise6InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise6InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise6InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
