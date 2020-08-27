import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }

  getMarketSummary(){
    return this.httpClient.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=IN&lang=en`,{
      headers:  new HttpHeaders().set("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
      .append("x-rapidapi-key", "68b9ff086amshc435a3c67bd55cbp154366jsn8991cf969bec") });   
  }

  getCompanyDetails(companyCode){
    return this.httpClient.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=IN&lang=en&symbol=${companyCode}`,{
      headers:  new HttpHeaders().set("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
      .append("x-rapidapi-key", "68b9ff086amshc435a3c67bd55cbp154366jsn8991cf969bec") });  
  }

  getCompanyNews(companyCode){
    return this.httpClient.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?region=IN&category=${companyCode}`,{
      headers:  new HttpHeaders().set("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
      .append("x-rapidapi-key", "68b9ff086amshc435a3c67bd55cbp154366jsn8991cf969bec") });  
  }
}

