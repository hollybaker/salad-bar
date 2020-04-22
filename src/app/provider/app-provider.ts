import { Injectable } from '@angular/core';
import { Recipe } from '../interface/recipe';
import { Observable, ReplaySubject } from "rxjs";
import { RecipeService } from '../service/recipe-service';

@Injectable()
export class AppProvider {
    private selectedRecipe: ReplaySubject<Recipe> = new ReplaySubject<Recipe>();

    private recipeService: RecipeService = new RecipeService();
    public recipesObservable: Observable<Array<Recipe>> = new Observable((observer) => {
        observer.next(this.recipeService.getRecipes());
        observer.complete();
    });

    public setSelectedRecipe(recipe: Recipe) {
        this.selectedRecipe.
        this.recipesObservable.
    }

}