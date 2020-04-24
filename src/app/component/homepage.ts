import { Component, Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { RecipeService } from '../service/recipe-service';

@Component({
  selector: 'homepage',
  templateUrl: '../template/homepage.html',
  styleUrls: ['../style/homepage.scss']
})
@Injectable()
export class Homepage {
  constructor(private recipeService: RecipeService) {}
  public recipes: Array<Recipe>;
  public imageUrlRelativePath: String = '../../assets/';

  ngOnInit() {
    this.recipeService.recipes.subscribe((recipes) => {
      this.recipes = recipes;
    })
  }

  public selectNewRecipe(recipe: Recipe) {
    this.recipeService.setSelectedRecipe(recipe)
  } 

}
