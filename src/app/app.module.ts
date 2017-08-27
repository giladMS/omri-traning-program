import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from "./app.routing";
import {LibModule} from "./lib/lib.module";


@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
