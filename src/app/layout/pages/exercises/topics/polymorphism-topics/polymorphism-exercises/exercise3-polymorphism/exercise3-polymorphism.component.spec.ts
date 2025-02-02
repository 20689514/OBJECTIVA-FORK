import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3PolymorphismComponent } from './exercise3-polymorphism.component';

describe('Exercise3PolymorphismComponent', () => {
  let component: Exercise3PolymorphismComponent;
  let fixture: ComponentFixture<Exercise3PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise3PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise3PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
