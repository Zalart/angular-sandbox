import {Component} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
public isSwitched: boolean = false;
constructor() {}

  onSwitchChange (value: HTMLInputElement) {
  this.isSwitched = value.checked;
}

  get statusLabel(): string {
    return this.isSwitched ? 'ON' : 'OFF';
  }
}
