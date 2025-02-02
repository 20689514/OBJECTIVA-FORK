import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise8PolymorphismComponent } from './exercise8-polymorphism.component';

describe('Exercise8PolymorphismComponent', () => {
  let component: Exercise8PolymorphismComponent;
  let fixture: ComponentFixture<Exercise8PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise8PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise8PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
