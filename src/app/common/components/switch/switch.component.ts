import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
@Input() public isActive: boolean = false;
@Input() public disabled: boolean = false;
@Output() switchChange = new EventEmitter<string>();

constructor() {}

  onSwitchChange() {
  if (!this.disabled) {
    this.isActive = !this.isActive;
    this.switchChange.emit(this.statusLabel);
  }
}
  get statusLabel(): string {
    return this.isActive ? 'ON' : 'OFF';
  }
}
