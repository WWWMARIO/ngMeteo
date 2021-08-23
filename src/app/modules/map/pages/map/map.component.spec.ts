import { ProviderAst } from "@angular/compiler";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        SharedModule,
        //AppRoutingModule,
        // BrowserAnimationsModule,

      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ MapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
