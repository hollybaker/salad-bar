import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { BehaviorSubject } from "rxjs";
import { RecipeClient } from '../client/recipe-client';
import { Ingredient } from '../interface/ingredient';

@Injectable()
export class RecipeService {
    constructor(private recipeClient: RecipeClient) {
        this.setRecipes(this.recipeClient.getRecipes());
    }
    public selectedRecipe: BehaviorSubject<Recipe> = new BehaviorSubject(null);
    public recipes: BehaviorSubject<Array<Recipe>> = new BehaviorSubject(null);
    public shoppingBasketIngredients: BehaviorSubject<Array<Ingredient>> = new BehaviorSubject([]);
    
    

    public setRecipes(recipes: Array<Recipe>) {
        this.recipes.next(recipes);
    }

    public setSelectedRecipe(recipe: Recipe) {
        this.selectedRecipe.next(recipe);
    };

    public addIngredientsToShoppingBasket(newIngredients: Array<Ingredient>) {
        let oldIngredients: Array<Ingredient>;
        this.shoppingBasketIngredients.subscribe((ingredients) => {
            oldIngredients = ingredients;
        })
        this.shoppingBasketIngredients.next(oldIngredients.concat(newIngredients));
    }


}

