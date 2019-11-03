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

  constructor(private dataService: DataService) {}


   addStock(symbol: string) {

    var startTime = new Date().getTime();
    var callStocks = setInterval(() => {
      this.dataService.getStockData(symbol.toUpperCase()).subscribe(
        (data) => {


          if(new Date().getTime() - startTime > 60000){
            clearInterval(callStocks);
            return;
        }
          console.log('success', data);
          for(let i in data.results.quote){
              let stock:Stock = new Stock(data.results.quote[i].equityinfo.shortname,data.results.quote[i].pricedata.last);
          
                    this.stocksData[i]=stock;
              }
        },
        error => console.log('oops', error)
      );
  
    }, 2000);
    
    callStocks;

    return this;
  }

}
