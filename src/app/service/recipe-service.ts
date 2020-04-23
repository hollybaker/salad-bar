import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { Observable, BehaviorSubject, } from "rxjs";
import { RecipeClient } from '../client/recipe-client';

@Injectable()
export class RecipeService {
    constructor(private recipeClient: RecipeClient) {
        this.setRecipes(this.recipeClient.getRecipes());
    }
    public selectedRecipe: BehaviorSubject<Recipe> = new BehaviorSubject<Recipe>(null);
    public recipes: BehaviorSubject<Array<Recipe>> = new BehaviorSubject(null);

    public setRecipes(recipes: Array<Recipe>) {
        this.recipes.next(recipes);
    }

    public setSelectedRecipe(recipe: Recipe) {
        this.selectedRecipe.next(recipe);
    };
}

