import { Component, Injectable, } from '@angular/core';
import { RecipeService } from '../service/recipe-service';

@Component({
  selector: 'greeter',
  templateUrl: '../template/greeter.html',
  styleUrls: ['../style/greeter.scss']
})
@Injectable()
export class Greeter {
  constructor(private recipeService: RecipeService) {}

  public name: string;
  public shoppingBasketCount: number;

  ngOnInit() {
    this.setName('Holly');
    this.recipeService.shoppingBasketIngredients.subscribe((ingredients) => {
      this.shoppingBasketCount = ingredients.length; 
    })
  }

  private setName(name: string) {
    this.name = name;  
  }
}
