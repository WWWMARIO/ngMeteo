import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoStationsComponent } from './meteo-stations.component';

describe('MeteoStationComponent', () => {
  let component: MeteoStationsComponent;
  let fixture: ComponentFixture<MeteoStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
