import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise3EncapsulationComponent } from './exercise3-encapsulation.component';

describe('Exercise3EncapsulationComponent', () => {
  let component: Exercise3EncapsulationComponent;
  let fixture: ComponentFixture<Exercise3EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise3EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise3EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
