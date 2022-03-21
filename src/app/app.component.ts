import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  onToggleState(status: string){
    console.log(`Switch toggled to ${status}`)
  }
}
