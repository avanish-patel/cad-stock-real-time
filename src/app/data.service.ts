import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restServer:string = "https://cad-stock-api.herokuapp.com/stockapi/v1/stocks/";



  constructor(private httpClient: HttpClient) { }


  public getStockData(stocks: string[]){

    let headers = new HttpHeaders()
    // .set('Origin', '*')
    // .set('cache-control', 'no-cache')
    // .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
    // .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    // .set('Access-Control-Allow-Origin', '*');

    // let headers = new HttpHeaders();
    // headers.set('Origin', 'https://web.tmxmoney.com');
    // 
    // // headers.set('Acc ept', '*/*');
    // headers.set('Access-Control-Allow-Headers', 'Content-Type');
    // headers.set('Referer', 'https://web.tmxmoney.com/quote.php?qm_symbol=HEXO');
    // headers.set('Test', 'test');
    
    const stocksNames: string = stocks.join();

      return this.httpClient.get(this.restServer+stocksNames);
  
    }
}
