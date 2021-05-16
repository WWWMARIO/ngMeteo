import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeteoStationModalComponent } from './edit-meteo-station-modal.component';

describe('EditMeteoStationModalComponent', () => {
  let component: EditMeteoStationModalComponent;
  let fixture: ComponentFixture<EditMeteoStationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMeteoStationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeteoStationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
