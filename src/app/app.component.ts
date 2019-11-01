import { DataService } from './data.service';
import { Stock } from './stock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  stocks: string[] = [];


  constructor(private dataService: DataService) {

  }


   // Simulate POST /todos
   addStock(symbol: string) {

    this.stocks.push(symbol);
    console.log(this.stocks);


    this.dataService.getStockData(this.stocks).subscribe((data)=>{
      console.log(data);
    })  


    return this;
  }

  getAllStocks(): string[] {
    return this.stocks;
  }

}
