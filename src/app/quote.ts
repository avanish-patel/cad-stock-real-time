import { PriceData } from './pricedata';
import { EquityInfo } from './equityinfo';

export class Quote {
    equityinfo: EquityInfo;
    pricedata: PriceData;

    constructor(equityinfo: EquityInfo,pricedata: PriceData){
        this.equityinfo = equityinfo;
        this.pricedata = pricedata;
    }   
}