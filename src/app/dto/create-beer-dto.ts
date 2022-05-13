export class CreateBeerDTO {

    constructor(
        public name: string,
        public ingredientIds: string[]
    ){}
}
