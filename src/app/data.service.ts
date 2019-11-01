import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restServer:string = "https://app.quotemedia.com/datatool/getSnapQuotes.json?symbols=";
  private queryParameters:string = "&timezone=true&token=097d21d4ae504125d05e1ff9633358948012e5043644b7d156785801addf7767";



  constructor(private httpClient: HttpClient) { }


  public getStockData(stocks: string[]){

    let headers = new HttpHeaders()
    .set('Origin', '*')
    .set('Access-Control-Allow-Headers', '*');

    // let headers = new HttpHeaders();
    // headers.set('Origin', 'https://web.tmxmoney.com');
    // headers.set('cache-control', 'no-cache');
    // // headers.set('Acc ept', '*/*');
    // headers.set('Access-Control-Allow-Headers', 'Content-Type');
    // headers.set('Referer', 'https://web.tmxmoney.com/quote.php?qm_symbol=HEXO');
    // headers.set('Test', 'test');
    // headers = headers.set('Sec-Fetch-Mode', 'cors');
    // headers = headers.set('Content-Type', 'application/json');
    
    const stocksNames: string = stocks.join();

      return this.httpClient.get(this.restServer+stocksNames+this.queryParameters, { headers: headers });
  
    }
}
