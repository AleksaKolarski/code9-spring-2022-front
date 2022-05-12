import { IngredientTypeEnum } from "../enums/ingredient-type-enum";

export class Ingredient {

    constructor(
        public name: string,
        public type: IngredientTypeEnum
    ){}
}
