import { Ingredient } from "./ingredient";

export class Beer {

    constructor(
        public id: string,
        public name: string,
        public ingredients: Ingredient[]
    ){}
}
