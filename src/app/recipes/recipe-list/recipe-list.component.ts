import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { EventEmitter } from 'events';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Testing things out', 'https://s23209.pcdn.co/wp-content/uploads/2020/01/Quick-Chicken-TaquitosIMG_0467-360x540.jpg'),
    new Recipe('Another Test Recipe', 'Testing things out', 'https://s23209.pcdn.co/wp-content/uploads/2020/01/Quick-Chicken-TaquitosIMG_0467-360x540.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)

  }

}
