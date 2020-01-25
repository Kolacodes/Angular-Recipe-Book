import { EventEmitter, Injectable } from '@angular/core';

import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
                   'Testing things out', 
                   'https://s23209.pcdn.co/wp-content/uploads/2020/01/Quick-Chicken-TaquitosIMG_0467-360x540.jpg',
                   [
                       new Ingredient('Meat', 1),
                       new Ingredient('French Fries', 20)
                   ]),
        new Recipe('Another Test Recipe',
                   'Testing things out', 
                   'https://s23209.pcdn.co/wp-content/uploads/2020/01/Quick-Chicken-TaquitosIMG_0467-360x540.jpg',
                   [
                    new Ingredient('Buns', 3),
                    new Ingredient('Ewedu', 20)
                   ]
    ),
                   
      ];

      constructor(private slService: ShoppingListService) {}
      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);

      }
}