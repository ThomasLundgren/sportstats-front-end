import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditConnectTeamToSeasonComponent } from './admin-edit-connect-team-to-season.component';

describe('AdminEditConnectTeamToSeasonComponent', () => {
  let component: AdminEditConnectTeamToSeasonComponent;
  let fixture: ComponentFixture<AdminEditConnectTeamToSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditConnectTeamToSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditConnectTeamToSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
