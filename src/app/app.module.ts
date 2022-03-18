import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchComponent } from './common/components/switch/switch.component';
import {SwitchDirective} from "./common/directives/switch.directive";

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SwitchDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
