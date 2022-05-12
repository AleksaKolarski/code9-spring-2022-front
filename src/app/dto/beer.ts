import { Ingredient } from "./ingredient";

export class Beer {

    constructor(
        public name: string,
        public ingredients: Ingredient[]
    ){}
}
