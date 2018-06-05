import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Ads } from './ads';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	
	public ads = [];
	
  constructor(private ApiService: ApiService) { }
	
  ngOnInit() {
		this.ApiService.getAds()
			.subscribe(
				data => this.ads = data,
				error => console.log('Error :: '+ error)
			)
  }

}
