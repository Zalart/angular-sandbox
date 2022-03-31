import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: '[shFor]'
})
export class RepeatDirective {
constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef ) {}

  @Input() set shFor(repeat: number) {
  this.viewContainer.clear();
  for (let i = 1; i <= repeat; i++) {
    this.viewContainer.createEmbeddedView(
      this.templateRef, {
        index: i,
      }
    )
  }
  }
}
