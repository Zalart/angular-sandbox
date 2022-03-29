import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitchComponent } from './common/components/switch/switch.component';
import { SearchFieldComponent } from './common/components/searchfield/searchfield.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SearchFieldComponent,
  ],
    imports: [
        BrowserModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
