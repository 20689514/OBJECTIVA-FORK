import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise10InheritanceComponent } from './exercise10-inheritance.component';

describe('Exercise10InheritanceComponent', () => {
  let component: Exercise10InheritanceComponent;
  let fixture: ComponentFixture<Exercise10InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise10InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise10InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
