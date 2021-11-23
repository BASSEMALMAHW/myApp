import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHighLight]',
})
export class AppHighLight {

  @Input() appHighLight: string = '';
  constructor(private eRef: ElementRef, private rendrer: Renderer2) {
    //eRef.nativeElement.
    //rendrer.setStyle(eRef.nativeElement,'backgroundColor','yellow');

  }
  @HostListener('mouseover') onMouseOver () {
    this.rendrer.setStyle(this.eRef.nativeElement,'backgroundColor',this.appHighLight);
  }
  @HostListener('mouseleave')onMouseLeave () {
    this.rendrer.setStyle(this.eRef.nativeElement,'backgroundColor','orange');
  }


}
