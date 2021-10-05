import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCardsComponent } from './slider-cards.component';

describe('SliderCardsComponent', () => {
  let component: SliderCardsComponent;
  let fixture: ComponentFixture<SliderCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
