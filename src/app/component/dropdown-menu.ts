import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { RecipeService } from '../service/recipe-service';

@Component({
  selector: 'dropdown-menu',
  templateUrl: '../template/dropdown-menu.html',
  styleUrls: ['../style/dropdown-menu.scss']
})

@Injectable()
export class DropdownMenu {
  constructor(private recipeService: RecipeService) {}
  public recipes: Array<Recipe>;

  ngOnInit() {
    this.recipeService.recipes.subscribe((recipes) => {
      this.recipes = recipes;
    })
  }

  public selectNewRecipe(recipe: Recipe) {
    this.recipeService.setSelectedRecipe(recipe)
  } 
}
