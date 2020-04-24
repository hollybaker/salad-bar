import { Recipe } from './recipe';

export interface Account {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    favourites: Array<Recipe>;
}