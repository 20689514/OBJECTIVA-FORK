import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7PolymorphismComponent } from './exercise7-polymorphism.component';

describe('Exercise7PolymorphismComponent', () => {
  let component: Exercise7PolymorphismComponent;
  let fixture: ComponentFixture<Exercise7PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise7PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise7PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
