import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-log',
  templateUrl: './click-log.component.html',
  styleUrls: ['./click-log.component.scss']
})
export class ClickLogComponent {

  log(): void {
    console.log('Click is logged');
  }

}
