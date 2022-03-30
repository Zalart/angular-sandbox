import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchComponent } from './common/components/switch/switch.component';
import { SearchFieldComponent } from './common/components/searchfield/searchfield.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DebounceClickDirective } from './common/directives/debounce-click.directive';
import { ClickLogComponent } from './click-log/click-log.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SearchFieldComponent,
    DebounceClickDirective,
    ClickLogComponent,
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
