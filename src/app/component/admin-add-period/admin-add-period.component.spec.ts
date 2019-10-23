import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPeriodComponent } from './admin-add-period.component';

describe('AdminAddPeriodComponent', () => {
  let component: AdminAddPeriodComponent;
  let fixture: ComponentFixture<AdminAddPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
