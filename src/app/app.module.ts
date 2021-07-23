import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent } from './core/shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { SharedModule } from "./modules/shared/shared.module";
import { LoginComponent } from './core/login/login.component';
import { AgmCoreModule } from "@agm/core";


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    PageNotFoundComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gmapsKey
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
