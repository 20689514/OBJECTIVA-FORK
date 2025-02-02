import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5EncapsulationComponent } from './exercise5-encapsulation.component';

describe('Exercise5EncapsulationComponent', () => {
  let component: Exercise5EncapsulationComponent;
  let fixture: ComponentFixture<Exercise5EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise5EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise5EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
