import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isUserActive: boolean = false;
  public isSwitchDisabled: boolean = false;

  ngOnInit() {
  }

  onToggleState(): void {
    this.isUserActive = !this.isUserActive;
  }
}
