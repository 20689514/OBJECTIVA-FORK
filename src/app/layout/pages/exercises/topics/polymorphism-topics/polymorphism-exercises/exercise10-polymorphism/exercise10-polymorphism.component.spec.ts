import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise10PolymorphismComponent } from './exercise10-polymorphism.component';

describe('Exercise10PolymorphismComponent', () => {
  let component: Exercise10PolymorphismComponent;
  let fixture: ComponentFixture<Exercise10PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise10PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise10PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
