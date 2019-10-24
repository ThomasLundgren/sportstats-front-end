import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddGoalComponent } from './admin-add-goal.component';

describe('AdminAddGoalComponent', () => {
  let component: AdminAddGoalComponent;
  let fixture: ComponentFixture<AdminAddGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
