import { Recipe } from '../interface/recipe';
import { Weights, Demonstratives, OptionalValues, Sillies } from '../interface/ingredient';

export class RecipeService {
    private dummyRecipes: Array<Recipe> = [
            {
                id: 0,
                name: 'Bavocrou',
                ingredients: [
                    {
                        id: 0,
                        name: 'Bacon',
                        quantity: {
                            value: Demonstratives.A,
                            optionalValue: OptionalValues.Large,
                            unitOfMeasurement: Sillies.Wad,
                        },
                        affix: 'smoked'
                    },
                
                    {
                        id: 1,
                        name: 'Avocado',
                        quantity: {
                            value: 1
                        }
                    },
                    {
                        id: 2,
                        name: 'Bread',
                        quantity: {
                            value: 2,
                            unitOfMeasurement: Sillies.Slices
                        },
                        affix: 'torn into 1 inch chunks'
                    }
                ],
                imageUrl: 'WhatsApp Image 2020-04-19 at 18.13.05.jpeg'
            },
            {
                id: 1,
                name: 'Ottolenghi',
                ingredients: [
                    {
                        id: 0,
                        name: 'Cauliflower',
                        quantity: {
                            value: 0.5
                        }
                    },
                    {
                        id: 1,
                        name: 'Pomegranate',
                        quantity: {
                            value: 1
                        }
                    },
                    {
                        id: 2,
                        name: 'Pistachio nuts',
                        quantity: {
                            value: 50,
                            unitOfMeasurement: Weights.Gram
                        }
                    }
                ],
                imageUrl: 'roasted-cauliflower-salad-main-720x720.jpg'
            }
        ]
        

    public getRecipes(): Array<Recipe> {
        return this.dummyRecipes;
    }

    public getRecipe(name: string): Recipe {
        for (let dummyRecipe of this.dummyRecipes) {
            if (dummyRecipe.name === name){
                return dummyRecipe;
            }
        }  
    }
}