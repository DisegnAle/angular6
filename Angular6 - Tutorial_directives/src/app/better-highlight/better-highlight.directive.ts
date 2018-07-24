import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';


  // questo decorator viene bindato ad una proprietà dell'elemento.
  // viene utilizzato camelCase perchè il DOM non riconosce '-'
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;  

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  // hostListener è il decorator di un metodo che accetta in input 
  // un evento passato come string
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
    this.backgroundColor = this.defaultColor;
  }

}
