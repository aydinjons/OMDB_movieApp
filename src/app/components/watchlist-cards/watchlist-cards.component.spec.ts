import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistCardsComponent } from './watchlist-cards.component';

describe('WatchlistCardsComponent', () => {
  let component: WatchlistCardsComponent;
  let fixture: ComponentFixture<WatchlistCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
