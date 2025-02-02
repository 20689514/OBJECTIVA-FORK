import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise8EncapsulationComponent } from './exercise8-encapsulation.component';

describe('Exercise8EncapsulationComponent', () => {
  let component: Exercise8EncapsulationComponent;
  let fixture: ComponentFixture<Exercise8EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise8EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise8EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
