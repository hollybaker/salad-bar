import { Component, Input, Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { RecipeService } from '../service/recipe-service';
import { Ingredient } from '../interface/ingredient';


@Component({
  selector: 'display-recipe',
  templateUrl: '../template/display-recipe.html',
  styleUrls: ['../style/display-recipe.scss']
})

@Injectable()
export class DisplayRecipe { 
  constructor(public recipeService: RecipeService) {}
  public imageUrlRelativePath: String = '../../assets/';
  public recipe: Recipe;

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe) => {
      this.recipe = recipe;
    })
  }
  
  public addIngredientsToShoppingBasket(ingredients: Array<Ingredient>) {
    this.recipeService.addIngredientsToShoppingBasket(ingredients);
  }
  
}

