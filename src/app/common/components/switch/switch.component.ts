import {Component} from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
public isSwitched: boolean = false;
constructor() {}

  onSwitchChange (event: Event) {
  this.isSwitched = (<HTMLInputElement>event.currentTarget).checked;
}
}
