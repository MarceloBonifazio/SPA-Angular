import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ads } from './ads';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url = '/assets/data/ads.json';
	
	constructor(private http: HttpClient) { }
	
	getAds(): Observable<Ads[]>{
		return this.http.get<Ads[]>(this._url);
	}
	
	getCurrency(locale: string) { 
		return this.http.get('https://free.currencyconverterapi.com/api/v5/convert?q='+locale+'&compact=y');
	}
	
}
