import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchComponent } from './common/components/switch/switch.component';
import { SearchFieldComponent } from './common/components/searchfield/searchfield.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RepeatDirective} from "./common/directives/repeat.directive";

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SearchFieldComponent,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
