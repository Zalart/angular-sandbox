import {Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Directive({
  selector: '[appDebounceClick]'
})

export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output() debounceClick = new EventEmitter();
  observable = new Subject();

  constructor() {

  }

  ngOnInit() {
    this.observable.pipe(debounceTime(1000)).subscribe((click) => this.debounceClick.emit(click));
  }
  ngOnDestroy() {
    this.observable.unsubscribe();
  }

  @HostListener('click', ['$event']) onNativeClick (event: Event) {
    this.observable.next(event);
}
}
