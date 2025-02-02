import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise9PolymorphismComponent } from './exercise9-polymorphism.component';

describe('Exercise9PolymorphismComponent', () => {
  let component: Exercise9PolymorphismComponent;
  let fixture: ComponentFixture<Exercise9PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise9PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise9PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
