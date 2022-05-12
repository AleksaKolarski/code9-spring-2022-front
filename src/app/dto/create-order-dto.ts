export class CreateOrderDTO {

    constructor(
        public name: string,
        public street: string,
        public city: string,
        public state: string,
        public zip: string,
        public creditCardNumber: string,
        public creditCardExpiration: string,
        public creditCardSecurityCode: string,
        public beerId: string
    ){}
}
