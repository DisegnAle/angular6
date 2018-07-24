import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
   // per poter usare ovunque nel codice l'elemento elementRef inserisco la dicitura 
   // private
    constructor(private elementRef: ElementRef){
     
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.background = 'green';
    }
}