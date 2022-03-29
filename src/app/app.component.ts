import {Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isUserActive: boolean = false;
  public isSwitchDisabled: boolean = false;

  onToggleState(): void {
    this.isUserActive = !this.isUserActive;
  }
}
