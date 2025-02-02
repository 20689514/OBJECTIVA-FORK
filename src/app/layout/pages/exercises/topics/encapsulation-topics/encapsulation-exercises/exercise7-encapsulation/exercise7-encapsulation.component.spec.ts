import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7EncapsulationComponent } from './exercise7-encapsulation.component';

describe('Exercise7EncapsulationComponent', () => {
  let component: Exercise7EncapsulationComponent;
  let fixture: ComponentFixture<Exercise7EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise7EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise7EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
