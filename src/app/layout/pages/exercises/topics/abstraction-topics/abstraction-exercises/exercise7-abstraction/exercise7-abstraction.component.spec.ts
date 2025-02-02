import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7AbstractionComponent } from './exercise7-abstraction.component';

describe('Exercise7AbstractionComponent', () => {
  let component: Exercise7AbstractionComponent;
  let fixture: ComponentFixture<Exercise7AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise7AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise7AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
