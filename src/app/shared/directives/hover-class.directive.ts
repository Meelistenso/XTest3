import { Directive, Input, HostListener, Renderer, ElementRef } from '@angular/core';


@Directive({ selector: '[appHoverClass]' })
export class HoverClassDirective {
  @Input()
  appHoverClass: string;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  @HostListener('mouseover') mouseover() {
    this.renderer.setElementClass(this.elementRef.nativeElement, this.appHoverClass, true);
  }

  @HostListener('mouseout') mouseout() {
    this.renderer.setElementClass(this.elementRef.nativeElement, this.appHoverClass, false);
  }
}
