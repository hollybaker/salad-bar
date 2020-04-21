import { Component } from '@angular/core';
import { RecipeService } from '../service/recipe-service';
import { Recipe } from '../interface/recipe';

@Component({
  selector: 'homepage',
  templateUrl: '../template/homepage.html',
  styleUrls: ['../style/homepage.scss']
})
export class Homepage {
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
