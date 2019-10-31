import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingGamesByTeamComponent } from './upcoming-games-by-team.component';

describe('UpcomingGamesByTeamComponent', () => {
  let component: UpcomingGamesByTeamComponent;
  let fixture: ComponentFixture<UpcomingGamesByTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingGamesByTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingGamesByTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
