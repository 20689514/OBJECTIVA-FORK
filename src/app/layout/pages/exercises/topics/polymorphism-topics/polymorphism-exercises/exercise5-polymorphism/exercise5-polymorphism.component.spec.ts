import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5PolymorphismComponent } from './exercise5-polymorphism.component';

describe('Exercise5PolymorphismComponent', () => {
  let component: Exercise5PolymorphismComponent;
  let fixture: ComponentFixture<Exercise5PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise5PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise5PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
