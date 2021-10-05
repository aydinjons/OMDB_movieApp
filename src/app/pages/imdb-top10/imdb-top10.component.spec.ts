import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbTop10Component } from './imdb-top10.component';

describe('ImdbTop10Component', () => {
  let component: ImdbTop10Component;
  let fixture: ComponentFixture<ImdbTop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbTop10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
