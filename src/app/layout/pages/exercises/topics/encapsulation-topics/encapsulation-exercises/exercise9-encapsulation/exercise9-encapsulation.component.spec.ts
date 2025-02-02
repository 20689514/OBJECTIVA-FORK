import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise9EncapsulationComponent } from './exercise9-encapsulation.component';

describe('Exercise9EncapsulationComponent', () => {
  let component: Exercise9EncapsulationComponent;
  let fixture: ComponentFixture<Exercise9EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise9EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise9EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
