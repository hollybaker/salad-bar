import { Ingredient } from './ingredient';

export interface Recipe { 
    id: number;
    name: string;
    ingredients: Array<Ingredient>;
    imageUrl: string;
}