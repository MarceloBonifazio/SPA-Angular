import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Ads } from './ads';

let perPage = ( localStorage.getItem('perPage') ? localStorage.getItem('perPage') : "10" );
let currency = ( localStorage.getItem('currency') ? localStorage.getItem('currency') : "BRL_BRL" );
let order = ( localStorage.getItem('order') ? localStorage.getItem('order') : "valor_total" );

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	
	public ads = [];
	public exchangRate: number;
	page: number = 1;
	perPage: string = perPage;
	currency: string = currency;
	order: string = order;
	
	
  constructor(private ApiService: ApiService) { }
	
  ngOnInit() {
		this.ApiService.getAds()
		.subscribe(
			data => this.ads = data,
			error => console.log('Error :: '+ error)
		);
		
		this.ApiService.getCurrency(localStorage.getItem('currency'))
		.subscribe(
			data => this.exchangRate = data[Object.getOwnPropertyNames(data)[0]].val.toFixed(2),
			error => console.log('Error :: '+ error)
		);
  }
	
	public changeCurrency(currency: string): void {
    localStorage.setItem('currency', currency);
    this.ApiService.getCurrency(localStorage.getItem('currency'))
		.subscribe(
			data => this.exchangRate = data[Object.getOwnPropertyNames(data)[0]].val.toFixed(2),
			error => console.log('Error :: '+ error)
		);
  }	
	
	public changePerPage(perPage: string): void {
    localStorage.setItem('perPage', perPage);
    location.reload(true);
  }
	
	public changeOrdering(order: string): void {
    localStorage.setItem('order', order);
  }

}
