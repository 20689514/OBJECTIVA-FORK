import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2InheritanceComponent } from './exercise2-inheritance.component';

describe('Exercise2InheritanceComponent', () => {
  let component: Exercise2InheritanceComponent;
  let fixture: ComponentFixture<Exercise2InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise2InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise2InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
