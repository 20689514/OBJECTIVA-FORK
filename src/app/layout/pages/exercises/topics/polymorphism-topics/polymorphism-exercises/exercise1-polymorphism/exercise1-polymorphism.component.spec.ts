import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise1PolymorphismComponent } from './exercise1-polymorphism.component';

describe('Exercise1PolymorphismComponent', () => {
  let component: Exercise1PolymorphismComponent;
  let fixture: ComponentFixture<Exercise1PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise1PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise1PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
