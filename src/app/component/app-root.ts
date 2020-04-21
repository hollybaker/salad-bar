import { Component } from '@angular/core';
import { RecipeService } from '../service/recipe-service';
import { Recipe } from '../interface/recipe';

@Component({
  selector: 'app-root',
  templateUrl: '../template/app-root.html',
  styleUrls: ['../style/app-root.scss']
})
export class AppRoot {
  private recipeService: RecipeService = new RecipeService();
  public recipes: Array<Recipe>;
  public recipe: Recipe;

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
      this.recipe = this.recipes[0];
  }  
  
  public onSelectedRecipe(id: number) {
    this.recipe = this.recipes.find(recipe => recipe.id === id);
  }
}
