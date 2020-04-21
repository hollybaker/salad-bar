import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../interface/recipe';

@Component({
  selector: 'dropdown-menu',
  templateUrl: '../template/dropdown-menu.html',
  styleUrls: ['../style/dropdown-menu.scss']
})
export class DropdownMenu {
  @Input() public recipes: Array<Recipe>;
  @Output() public selectedRecipe = new EventEmitter<number>();

  public selectNewRecipe(id: number) {
    this.selectedRecipe.emit(id);
  }
}
