export interface CocktailDefinition {
  name: string;
  ingredients: {
    baseAlcohol1: Ingredient;
    baseAlcohol2?: Ingredient;
    citrus?: Ingredient;
    sweetner: Ingredient;
    garnish: string;
  };
  glass: string;
  hardware: string[]
}

interface Ingredient {
  type: string,
  subtype?: string,
  amount: string
}
