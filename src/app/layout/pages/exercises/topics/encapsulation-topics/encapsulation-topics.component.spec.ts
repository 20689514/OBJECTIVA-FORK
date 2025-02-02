import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationTopicsComponent } from './encapsulation-topics.component';

describe('EncapsulationTopicsComponent', () => {
  let component: EncapsulationTopicsComponent;
  let fixture: ComponentFixture<EncapsulationTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncapsulationTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
