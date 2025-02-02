import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise7InheritanceComponent } from './exercise7-inheritance.component';

describe('Exercise7InheritanceComponent', () => {
  let component: Exercise7InheritanceComponent;
  let fixture: ComponentFixture<Exercise7InheritanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise7InheritanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise7InheritanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
