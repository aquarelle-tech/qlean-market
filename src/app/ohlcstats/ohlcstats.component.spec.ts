import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OHLCStatsComponent } from './ohlcstats.component';

describe('OHLCStatsComponent', () => {
  let component: OHLCStatsComponent;
  let fixture: ComponentFixture<OHLCStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OHLCStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OHLCStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
