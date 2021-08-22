import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationReadingsComponent } from './station-readings.component';

describe('StationReadingsComponent', () => {
  let component: StationReadingsComponent;
  let fixture: ComponentFixture<StationReadingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationReadingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
