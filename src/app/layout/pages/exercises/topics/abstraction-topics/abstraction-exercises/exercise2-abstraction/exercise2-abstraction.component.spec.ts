import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2AbstractionComponent } from './exercise2-abstraction.component';

describe('Exercise2AbstractionComponent', () => {
  let component: Exercise2AbstractionComponent;
  let fixture: ComponentFixture<Exercise2AbstractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise2AbstractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise2AbstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
