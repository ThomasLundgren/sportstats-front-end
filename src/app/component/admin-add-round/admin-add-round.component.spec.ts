import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddRoundComponent } from './admin-add-round.component';

describe('AdminAddRoundComponent', () => {
  let component: AdminAddRoundComponent;
  let fixture: ComponentFixture<AdminAddRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
