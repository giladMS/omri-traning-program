import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
