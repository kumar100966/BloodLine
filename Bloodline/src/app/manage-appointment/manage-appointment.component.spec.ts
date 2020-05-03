import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentComponent } from './manage-appointment.component';

describe('ManageAppointmentComponent', () => {
  let component: ManageAppointmentComponent;
  let fixture: ComponentFixture<ManageAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
