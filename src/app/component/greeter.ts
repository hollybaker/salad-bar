import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../interface/recipe';

@Component({
  selector: 'greeter',
  templateUrl: '../template/greeter.html',
  styleUrls: ['../style/greeter.scss']
})
export class Greeter {
  @Input() public recipes: Array<Recipe>;
  @Output() public selectedRecipe = new EventEmitter<number>();
  
  public name: string;

  ngOnInit() {
    this.setName('Holly');
  }

  private setName(name: string) {
    this.name = name;  
  }

  public onSelectedRecipe(id: number) {
    this.selectedRecipe.emit(id);
  }
}
