export interface RecipeIngredient {
    id: number;
    name: string;
    quantity: Quantity;
    affix?: string;
}

export interface Quantity {
    value: number | Demonstratives;
    optionalValue?: OptionalValues;
    unitOfMeasurement?: Weights | Volumes | Sillies | Spoons;
}

export enum Weights {
    Kilogram = 'kg',
    Gram = 'g',
    Ounce = 'oz',
    Pound = 'lb'
}

export enum Volumes {
    Litre = 'l',
    Millilitre = 'ml',
    Cup = 'cup'
}

export enum Sillies {
    Dash = 'dash of',
    Pinch = ' pinch of',
    Handful = 'handful of',
    Handfuls = 'handfuls of',
    Speck = 'speck of',
    Specks = 'specks of',
    Wad = 'wad of',
    Wads = 'wads of',
    Bunch = 'bunch of',
    Bunches = 'bunches of',
    Sprinkling = 'sprinkling of',
    Glug = 'glug of',
    Slice = 'slice of',
    Slices = 'slices of',
    Clove = 'clove of',
    Cloves = 'cloves of'
}

export enum Spoons {
    Teaspoon = 'tsp',
    Tablespoon = 'tbsp',
    Dessertspoon = 'dstspn'
}

export enum OptionalValues {
    Level = 'level',
    Rounded = 'rounded',
    Heaper = 'heaped',
    Large = 'large',
    Small = 'small'

}

export enum Demonstratives {
    A = 'a'
}