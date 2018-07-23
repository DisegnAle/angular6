import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //use @ViewChild component
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredients(){
    // IMPORTANT
    const ingrName = this.nameInputRef.nativeElement.value;
    const ingrAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingrName, ingrAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
