import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  // inserisco private in modo da non poter accedere a questo array dall'esterno
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is simply a test', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
      [
        new Ingredient('Meat',1 ),
        new Ingredient('French fries', 20)
      ]),
    new Recipe(
      'Another Test Recipe', 
      'This is simply a test', 
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
      [
          new Ingredient('Meat',1 ),
          new Ingredient('French fries', 20)  
      ])
  ];

  getRecipes(){
    // utilizzo slice per creare una copia dell'array e non andare a modificare i dati
    // all'interno del servizio
    return this.recipes.slice();
  }

  constructor() { }
}
