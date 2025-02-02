import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise6PolymorphismComponent } from './exercise6-polymorphism.component';

describe('Exercise6PolymorphismComponent', () => {
  let component: Exercise6PolymorphismComponent;
  let fixture: ComponentFixture<Exercise6PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise6PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise6PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
