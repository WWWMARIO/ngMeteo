import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { SharedModule } from "../shared/shared.module";
import { AgmCoreModule } from "@agm/core";
import { WelcomeComponent } from "./pages/welcome/welcome.component";



@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule,
    AgmCoreModule
    ]
})
export class WelcomeModule { }
