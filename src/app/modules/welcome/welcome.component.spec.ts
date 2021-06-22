import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from "../shared/shared.module";

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      // AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      //AppRoutingModule,
      // BrowserAnimationsModule
    ],
      declarations: [ WelcomeComponent ],
      /* providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        // { provide: MatDialogRef, useValue: {} }
      ], */
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
