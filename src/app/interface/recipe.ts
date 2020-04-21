import { RecipeIngredient } from './recipe-ingredient';

export interface Recipe { 
    id: number;
    name: string;
    ingredients: Array<RecipeIngredient>;
    imageUrl: string;
}