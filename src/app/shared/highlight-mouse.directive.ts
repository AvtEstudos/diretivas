import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.renderer.setElementStyle( 
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    )
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setElementStyle( 
      this.elementRef.nativeElement,
      'background-color',
      'white'
    )
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) {

   }

}
