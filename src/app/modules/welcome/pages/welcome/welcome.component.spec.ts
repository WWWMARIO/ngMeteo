import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AngularFireModule } from "@angular/fire";
import { By } from "@angular/platform-browser";
import { SharedModule } from "src/app/modules/shared/shared.module";
import { environment } from "src/environments/environment";
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({imports: [
      // ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      SharedModule,
      // AgmCoreModule
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

  it('should contain login button', () => {
    let loginButton = fixture.debugElement.query(By.css('#loginBtn'))
    expect(loginButton).toBeTruthy();
  });

  it('should contain header', () => {
    let header = fixture.debugElement.query(By.css('.header')).nativeElement
    expect(header.textContent).toContain('International Education Program Veleri-OI IoT School');
  });

  it('should contain subheader', () => {
    let subheader = fixture.debugElement.query(By.css('.subheader')).nativeElement
    expect(subheader.textContent).toContain('Case study of the IoT project "Cov protect System');
  });

  /* it('should contain map ', async () => {
    fixture.whenStable().then(async () => {
      fixture.detectChanges();
      let map = fixture.debugElement.query(By.css('agm-map'))
      console.log(map)
      expect(map).toBeTruthy();
    });
  }); */

  it('runs login on login button click', fakeAsync(() => {
    spyOn(component, 'login');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.login).toHaveBeenCalled();
  }));
});
