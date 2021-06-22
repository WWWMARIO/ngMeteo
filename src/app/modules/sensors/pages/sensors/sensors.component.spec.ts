import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from "src/app/modules/shared/shared.module";

import { SensorsComponent } from './sensors.component';

describe('SensorsComponent', () => {
  let component: SensorsComponent;
  let fixture: ComponentFixture<SensorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      // AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      // BrowserAnimationsModule
    ],
      declarations: [ SensorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
