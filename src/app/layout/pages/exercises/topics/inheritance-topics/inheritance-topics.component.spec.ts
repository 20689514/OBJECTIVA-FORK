import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InheritanceTopicsComponent } from './inheritance-topics.component';

describe('InheritanceTopicsComponent', () => {
  let component: InheritanceTopicsComponent;
  let fixture: ComponentFixture<InheritanceTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InheritanceTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InheritanceTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
