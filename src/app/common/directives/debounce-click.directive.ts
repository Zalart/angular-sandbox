import {Directive, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Directive({
  selector: '[appDebounceClick]'
})

export class DebounceClickDirective implements OnInit {
  @Output() debounceClick = new EventEmitter();
  observable = new Subject();

  constructor() {
    this.observable.pipe(debounceTime(1000)).subscribe((click) => this.debounceClick.emit(click));
  }

  ngOnInit() {
  }
@HostListener('click', ['$event']) onNativeClick (event: Event) {
    this.observable.next(event);
}
}
