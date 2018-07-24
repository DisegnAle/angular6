import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // utilizzo set per trasformare unless in una proprietà
  // anche se si tratta di un metodo
  @Input() set appUnless(condition:boolean){
    if(!!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }

  // tramite templateRef e vcRef accedo ai punti nel DOM in cui voglio renderizzare il mio template
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { 

  }

}
