import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSportComponent } from './admin-add-sport.component';

describe('AdminAddSportComponent', () => {
  let component: AdminAddSportComponent;
  let fixture: ComponentFixture<AdminAddSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
