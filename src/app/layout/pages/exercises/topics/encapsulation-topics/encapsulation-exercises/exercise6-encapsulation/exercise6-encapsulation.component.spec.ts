import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise6EncapsulationComponent } from './exercise6-encapsulation.component';

describe('Exercise6EncapsulationComponent', () => {
  let component: Exercise6EncapsulationComponent;
  let fixture: ComponentFixture<Exercise6EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise6EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise6EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
