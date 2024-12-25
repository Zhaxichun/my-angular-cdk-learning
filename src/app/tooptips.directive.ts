import {
  Directive,
  inject,
  input,
  output,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appTooptips]',
})
export class TooptipsDirective {
  crd = inject(ViewContainerRef);
  constructor() {}

  color = input.required<string>();

  onChange = output();
}
