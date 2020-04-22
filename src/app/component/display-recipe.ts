import { Component, Input, Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { AppProvider } from '../provider/app-provider';


@Component({
  selector: 'display-recipe',
  templateUrl: '../template/display-recipe.html',
  styleUrls: ['../style/display-recipe.scss']
})
export class DisplayRecipe { 
  constructor(public appProvider: AppProvider) {}

  @Input() 
  public recipe: Recipe;
  
  public imageUrlRelativePath: String = '../../assets/';


}

