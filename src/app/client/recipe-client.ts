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
                        "name": "bacon",
                        "quantity": {
                            "value": Demonstratives.A,
                            "optionalValue": OptionalValues.Large,
                            "unitOfMeasurement": Sillies.Wad,
                        },
                        "affix": 'smoked'
                    },
                
                    {
                        "id": 1,
                        "name": 'avocado',
                        "quantity": {
                            "value": 1
                        }
                    },
                    {
                        "id": 2,
                        "name": 'bread',
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
                        "name": 'cauliflower',
                        "quantity": {
                            "value": 0.5
                        }
                    },
                    {
                        "id": 4,
                        "name": 'pomegranate',
                        "quantity": {
                            "value": 1
                        }
                    },
                    {
                        "id": 5,
                        "name": 'pistachio nuts',
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
                        "name": "peaches",
                        "quantity": {
                            "value": 6
                        }
                    },
                    {
                        "id": 7,
                        "name": "parma ham",
                        "quantity": {
                            "value": 12,
                            "unitOfMeasurement": Sillies.Slices
                        }
                    },
                    {
                        "id": 8,
                        "name": "buffalo mozzarella",
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
                        "name": "figs",
                        "quantity": {
                            "value": 12
                        }
                    },
                    {
                        "id": 10,
                        "name": "oranges",
                        "quantity": {
                            "value": 2
                        }
                    },
                    {
                        "id": 11,
                        "name": "goat's cheese",
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