import { Component, Input } from '@angular/core';
import { Recipe } from '../interface/recipe';


@Component({
  selector: 'display-recipe',
  templateUrl: '../template/display-recipe.html',
  styleUrls: ['../style/display-recipe.scss']
})
export class DisplayRecipe { 
  @Input() public recipe: Recipe;
  
  public imageUrlRelativePath: String = '../../assets/';

}

