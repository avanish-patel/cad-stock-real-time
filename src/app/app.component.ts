import { DataService } from './data.service';
import { Stock } from './stock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  stocks: string = "";
  stocksData: Stock[] = [];

  constructor(private dataService: DataService) {
  }


   addStock(symbol: string) {
    var startTime = new Date().getTime();
    var addStock = setInterval(() => {
      this.dataService.getStockData(symbol.toUpperCase())
      .subscribe(
        (data) => {
          if(new Date().getTime() - startTime > 60000){
            clearInterval(addStock);
            return;
        }
          for(let i in data.results.quote){
              let stock:Stock = new Stock(
                data.results.quote[i].equityinfo.shortname,
                data.results.quote[i].pricedata.last,
                data.results.quote[i].pricedata.change,
                data.results.quote[i].pricedata.changepercent,
                data.results.quote[i].pricedata.sharevolume,
                data.results.quote[i].pricedata.prevclose,
                data.results.quote[i].pricedata.open,
                data.results.quote[i].pricedata.low,
                data.results.quote[i].pricedata.high,
                0,
                0
                );
          
                    this.stocksData[i]=stock;
              }
        },
        error => console.log('oops', error)
      );
  
    }, 2000);

    return this;
  }

}
