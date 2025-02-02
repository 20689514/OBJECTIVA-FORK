import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2EncapsulationComponent } from './exercise2-encapsulation.component';

describe('Exercise2EncapsulationComponent', () => {
  let component: Exercise2EncapsulationComponent;
  let fixture: ComponentFixture<Exercise2EncapsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise2EncapsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise2EncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
