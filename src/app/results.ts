import { Quote } from './quote';

export class Results {
    quote: Quote[]

    constructor(quote: Quote[]){
        this.quote = quote;
    }
}
