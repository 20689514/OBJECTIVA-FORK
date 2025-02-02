import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise10EncapsulationComponent } from './exercise10-encapsulation.component';

describe('Exercise10EncapsulationComponent', () => {
  let component: Exercise10EncapsulationComponent;
  let fixture: ComponentFixture<Exercise10EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise10EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise10EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
