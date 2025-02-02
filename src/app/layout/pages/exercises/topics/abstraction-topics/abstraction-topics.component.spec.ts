import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractionTopicsComponent } from './abstraction-topics.component';

describe('AbstractionTopicsComponent', () => {
  let component: AbstractionTopicsComponent;
  let fixture: ComponentFixture<AbstractionTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbstractionTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractionTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
