import { Recipe } from '../interface/recipe';
import { Weights, Demonstratives, OptionalValues, Sillies } from '../interface/ingredient';

export class RecipeClient {
    private dummyRecipes: Array<Recipe> = [
            {
                "id": 0,
                "name": "Bavocrou",
                "ingredients": [
                    {
                        "id": 0,
                        "name": "Bacon",
                        "quantity": {
                            "value": Demonstratives.A,
                            "optionalValue": OptionalValues.Large,
                            "unitOfMeasurement": Sillies.Wad,
                        },
                        "affix": 'smoked'
                    },
                
                    {
                        "id": 1,
                        "name": 'Avocado',
                        "quantity": {
                            "value": 1
                        }
                    },
                    {
                        "id": 2,
                        "name": 'Bread',
                        "quantity": {
                            "value": 2,
                            "unitOfMeasurement": Sillies.Slices
                        },
                        "affix": 'torn into 1 inch chunks'
                    }
                ],
                "imageUrl": 'WhatsApp Image 2020-04-19 at 18.13.05.jpeg'
            },
            {
                "id": 1,
                "name": 'Cauliflower & Pomegranate',
                "ingredients": [
                    {
                        "id": 3,
                        "name": 'Cauliflower',
                        "quantity": {
                            "value": 0.5
                        }
                    },
                    {
                        "id": 4,
                        "name": 'Pomegranate',
                        "quantity": {
                            "value": 1
                        }
                    },
                    {
                        "id": 5,
                        "name": 'Pistachio nuts',
                        "quantity": {
                            "value": 50,
                            "unitOfMeasurement": Weights.Gram
                        }
                    }
                ],
                "imageUrl": 'roasted-cauliflower-salad-main-720x720.jpg'
            },
            {
                "id": 2,
                "name": "Roast Peach & Parma Ham Salad",
                "ingredients": [
                    {
                        "id": 6,
                        "name": "Peaches",
                        "quantity": {
                            "value": 6
                        }
                    },
                    {
                        "id": 7,
                        "name": "Parma Ham",
                        "quantity": {
                            "value": 12,
                            "unitOfMeasurement": Sillies.Slices
                        }
                    },
                    {
                        "id": 8,
                        "name": "Buffalo Mozzarella",
                        "quantity": {
                            "value": 2,
                            "unitOfMeasurement": Sillies.Balls
                        }
                    }
                ],
                "imageUrl": "roast_peach.jpg"
            },
            {
                "id": 3,
                "name": "Caramelised Fig & Orange",
                "ingredients": [
                    {
                        "id": 9,
                        "name": "Figs",
                        "quantity": {
                            "value": 12
                        }
                    },
                    {
                        "id": 10,
                        "name": "Oranges",
                        "quantity": {
                            "value": 2
                        }
                    },
                    {
                        "id": 11,
                        "name": "Goat's Cheese",
                        "quantity": {
                            "value": 150,
                            "unitOfMeasurement": Weights.Gram
                        }
                    }
                ],
                "imageUrl": "fig_orange_goats_cheese.jpg"
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