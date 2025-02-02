import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise10AbstractionComponent } from './exercise10-abstraction.component';

describe('Exercise10AbstractionComponent', () => {
  let component: Exercise10AbstractionComponent;
  let fixture: ComponentFixture<Exercise10AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise10AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise10AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
