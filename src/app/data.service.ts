import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //https://cad-stock-api.herokuapp.com/
  private restServer:string = "https://cad-stock-api.herokuapp.com/stockapi/v1/stocks/";

  constructor(private httpClient: HttpClient) { }

  public getStockData(stocks: string): Observable<Response>{

      return this.httpClient.get<Response>(this.restServer+stocks);
    }
}
