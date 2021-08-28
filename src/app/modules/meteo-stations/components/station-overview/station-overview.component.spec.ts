import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";

import { StationOverviewComponent } from './station-overview.component';

describe('StationOverviewComponent', () => {
  let component: StationOverviewComponent;
  let fixture: ComponentFixture<StationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      // SharedModule,
      //AppRoutingModule,
      //BrowserAnimationsModule
    ],
      declarations: [ StationOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
