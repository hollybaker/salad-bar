import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { AppProvider } from '../provider/app-provider';

@Component({
  selector: 'dropdown-menu',
  templateUrl: '../template/dropdown-menu.html',
  styleUrls: ['../style/dropdown-menu.scss']
})

@Injectable()
export class DropdownMenu {
  constructor(private appProvider: AppProvider) {}
  // @Input() public recipes: Array<Recipe>;
  // @Output() public selectedRecipe = new EventEmitter<number>();

  public selectNewRecipe(recipe: Recipe) {
    this.appProvider.setSelectedRecipe(recipe)
  }
  
  public recipes: Array<Recipe>;

  ngOnInit() {
    console.log(this.appProvider);
    this.appProvider.recipesObservable.subscribe((recipes) => {
      this.recipes = recipes;
    })
  }
}
