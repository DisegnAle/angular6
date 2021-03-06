import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    // INFORMO GLI ALTRI COMPONENTI DEL CAMBIAMENTO DI QUESTO ARRAY
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  

  constructor() { }
}
