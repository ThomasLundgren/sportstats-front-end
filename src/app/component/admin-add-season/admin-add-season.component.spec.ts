import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSeasonComponent } from './admin-add-season.component';

describe('AdminAddSeasonComponent', () => {
  let component: AdminAddSeasonComponent;
  let fixture: ComponentFixture<AdminAddSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
