import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3InheritanceComponent } from './exercise3-inheritance.component';

describe('Exercise3InheritanceComponent', () => {
  let component: Exercise3InheritanceComponent;
  let fixture: ComponentFixture<Exercise3InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise3InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise3InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
