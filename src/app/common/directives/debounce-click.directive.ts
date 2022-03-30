import {Directive, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";

@Directive({
  selector: '[appDebounceClick]'
})

export class DebounceClickDirective implements OnInit {
  @Output() debounceClick = new EventEmitter();
  observable = new Subject();

  constructor() {
    this.observable.subscribe((click) => this.debounceClick.emit(click));
  }

  ngOnInit() {
  }
@HostListener('click', ['$event']) onNativeClick (event: Event) {
    this.observable.next(event);
}
}
