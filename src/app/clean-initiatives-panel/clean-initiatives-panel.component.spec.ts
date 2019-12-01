import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanInitiativesPanelComponent } from './clean-initiatives-panel.component';

describe('CleanInitiativesPanelComponent', () => {
  let component: CleanInitiativesPanelComponent;
  let fixture: ComponentFixture<CleanInitiativesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanInitiativesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanInitiativesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
