import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsBySportComponent } from './teams-by-sport.component';

describe('TeamsBySportComponent', () => {
  let component: TeamsBySportComponent;
  let fixture: ComponentFixture<TeamsBySportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsBySportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsBySportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
