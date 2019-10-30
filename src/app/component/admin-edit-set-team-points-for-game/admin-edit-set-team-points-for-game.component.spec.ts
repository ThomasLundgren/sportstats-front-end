import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSetTeamPointsForGameComponent } from './admin-edit-set-team-points-for-game.component';

describe('AdminEditSetTeamPointsForGameComponent', () => {
  let component: AdminEditSetTeamPointsForGameComponent;
  let fixture: ComponentFixture<AdminEditSetTeamPointsForGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditSetTeamPointsForGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSetTeamPointsForGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
