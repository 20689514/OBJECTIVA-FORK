import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2PolymorphismComponent } from './exercise2-polymorphism.component';

describe('Exercise2PolymorphismComponent', () => {
  let component: Exercise2PolymorphismComponent;
  let fixture: ComponentFixture<Exercise2PolymorphismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise2PolymorphismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise2PolymorphismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
