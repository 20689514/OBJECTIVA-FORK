import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolymorphismTopicsComponent } from './polymorphism-topics.component';

describe('PolymorphismTopicsComponent', () => {
  let component: PolymorphismTopicsComponent;
  let fixture: ComponentFixture<PolymorphismTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolymorphismTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolymorphismTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
