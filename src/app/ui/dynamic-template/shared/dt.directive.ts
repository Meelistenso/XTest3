import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDtHost]'
})
export class DtDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
