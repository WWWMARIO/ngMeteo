import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from "src/app/modules/shared/shared.module";

import { ReadingsListComponent } from './readings-list.component';

describe('ReadingsListComponent', () => {
  let component: ReadingsListComponent;
  let fixture: ComponentFixture<ReadingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [
      SharedModule],
      declarations: [ ReadingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
