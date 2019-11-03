import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restServer:string = "http://localhost:8080/stockapi/v1/stocks/";

  constructor(private httpClient: HttpClient) { }

  public getStockData(stocks: string): Observable<Response>{

      return this.httpClient.get<Response>(this.restServer+stocks);
    }
}
