import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCleanInitiativeComponent } from './new-clean-initiative.component';

describe('NewCleanInitiativeComponent', () => {
  let component: NewCleanInitiativeComponent;
  let fixture: ComponentFixture<NewCleanInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCleanInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCleanInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
