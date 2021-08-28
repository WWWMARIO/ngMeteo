import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";

import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      AppRoutingModule,
      BrowserAnimationsModule

    ],
      declarations: [ ShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain MORE OPTIONS button', () => {
    let btn = fixture.debugElement.query(By.css('#moreOptionsBtn'))
    expect(btn).toBeTruthy();
  });

 /*  it('should contain sidebar', () => {
    let sidenav = fixture.debugElement.query(By.css('mat-sidenav'))
    expect(sidenav).toBeTruthy();
  });
 */
 /*  it('should contain link to stations', () => {
    let link = fixture.debugElement.query(By.css('#linkToStation'))
    expect(link).toBeTruthy();
  });

  it('should contain link to sensors', () => {
    let link = fixture.debugElement.query(By.css('#linkToSensors'))
    expect(link).toBeTruthy();
  }); */

  /* it('should contain link to readings', () => {
    let link = fixture.debugElement.query(By.css('#linkToReadings'))
    expect(link).toBeTruthy();
  }); */


});
