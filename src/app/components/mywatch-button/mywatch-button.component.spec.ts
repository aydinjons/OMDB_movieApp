import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywatchButtonComponent } from './mywatch-button.component';

describe('MywatchButtonComponent', () => {
  let component: MywatchButtonComponent;
  let fixture: ComponentFixture<MywatchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MywatchButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MywatchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
