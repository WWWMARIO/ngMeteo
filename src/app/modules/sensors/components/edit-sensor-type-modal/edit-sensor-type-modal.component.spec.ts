import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSensorTypeModalComponent } from './edit-sensor-type-modal.component';

describe('EditSensorTypeModalComponent', () => {
  let component: EditSensorTypeModalComponent;
  let fixture: ComponentFixture<EditSensorTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSensorTypeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSensorTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
