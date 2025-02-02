import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise8InheritanceComponent } from './exercise8-inheritance.component';

describe('Exercise8InheritanceComponent', () => {
  let component: Exercise8InheritanceComponent;
  let fixture: ComponentFixture<Exercise8InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise8InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise8InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
