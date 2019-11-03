export class PriceData {
changepercent: number;
last: number;
bidmarketidentificationcode: string;
change: number;
tradevolume: number;
prevclose: number;
asksize: number;
tick: number;
high: number;
lasttradedatetime: string;
low: number;
ask: number;
bidsize: number;
bid: number;
lastmarketidentificationcode: string;
open: number;
sharevolume: number;
askmarketidentificationcode: string;


constructor(changepercent: number, last: number, bidmarketidentificationcode: string,change: number, tradevolume: number, prevclose: number, asksize: number, tick: number,high: number, lasttradedatetime: string, low: number, ask: number, bidsize: number,bid: number, lastmarketidentificationcode: string, open: number, sharevolume: number, askmarketidentificationcode: string){
    this.changepercent= changepercent;
    this.last= last;
    this.bidmarketidentificationcode= bidmarketidentificationcode;
    this.change= change;
    this.tradevolume= tradevolume;
    this.prevclose= prevclose;
    this.asksize= asksize;
    this.tick= tick;
    this.high= high;
    this.lasttradedatetime= lasttradedatetime;
    this.low= low;
    this.ask= ask;
    this.bidsize= bidsize;
    this.bid= bid;
    this.lastmarketidentificationcode= lastmarketidentificationcode;
    this.open= open;
    this.sharevolume= sharevolume;
    this.askmarketidentificationcode= askmarketidentificationcode;
}
}