import {Directive, HostBinding, HostListener} from "@angular/core";
@Directive({
  selector: '[appSwitchDirective]'
})
export class SwitchDirective {
  @HostBinding('class.on') isChecked = false;
  @HostListener('change') toggleSwitch(){
    this.isChecked = !this.isChecked;
  }
}
