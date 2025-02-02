import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise9InheritanceComponent } from './exercise9-inheritance.component';

describe('Exercise9InheritanceComponent', () => {
  let component: Exercise9InheritanceComponent;
  let fixture: ComponentFixture<Exercise9InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise9InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise9InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
