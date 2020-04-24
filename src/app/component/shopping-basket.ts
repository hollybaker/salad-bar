import { Component, Injectable, } from '@angular/core';
import { RecipeService } from '../service/recipe-service';
import { Ingredient } from '../interface/ingredient';

@Component({
  selector: 'shopping-basket',
  templateUrl: '../template/shopping-basket.html',
  styleUrls: ['../style/shopping-basket.scss']
})

@Injectable()
export class ShoppingBasket {
  constructor(private recipeService: RecipeService) {}

  public ingredients: Array<Ingredient>;

  ngOnInit() {
    this.recipeService.shoppingBasketIngredients.subscribe((ingredients) => {
      this.ingredients = ingredients;
    })
  }

}
