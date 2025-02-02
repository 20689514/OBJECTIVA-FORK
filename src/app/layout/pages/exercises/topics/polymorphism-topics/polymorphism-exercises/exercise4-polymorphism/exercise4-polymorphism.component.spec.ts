import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4PolymorphismComponent } from './exercise4-polymorphism.component';

describe('Exercise4PolymorphismComponent', () => {
  let component: Exercise4PolymorphismComponent;
  let fixture: ComponentFixture<Exercise4PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise4PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise4PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
