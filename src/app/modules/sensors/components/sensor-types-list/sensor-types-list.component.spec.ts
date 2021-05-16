import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorTypesListComponent } from './sensor-types-list.component';

describe('SensorTypesListComponent', () => {
  let component: SensorTypesListComponent;
  let fixture: ComponentFixture<SensorTypesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorTypesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
