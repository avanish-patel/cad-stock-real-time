export class Stock {
    name: string;
    price: number;
    change: number;
    changePercent: number;
    volume: number;
    prevClose: number;
    open: number;
    dayLow: number;
    dayHigh: number;
    weekLow: number;
    weekHigh: number;
    

    constructor(name:string, 
        price:number,
        change:number,
        changePercent:number,
        volume:number,
        prevClose:number,
        open:number,
        dayLow: number,
        dayHigh: number,
        weekLow: number,
        weekHigh: number){
        this.name = name;
        this.price = price;
        this.change = change;
        this.changePercent = changePercent;
        this.volume = volume;
        this.prevClose = prevClose;
        this.open = open;
        this.dayLow = dayLow;
        this.dayHigh = dayHigh;
        this.weekLow = weekLow;
        this.weekHigh = weekHigh;
    }
}
