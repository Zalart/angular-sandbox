import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
@Input() public isActive: boolean = false;
@Input() public disabled: boolean = false;
@Output() switchChange = new EventEmitter();

constructor() {}

  onSwitchChange() {
  if (!this.disabled) {
    this.switchChange.emit();
  }
}
  get userStatus(): string {
    return this.isActive ? 'Active': 'Inactive';
  }
}
