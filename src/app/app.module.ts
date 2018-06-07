import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { TableComponent } from './table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
		NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		NgxPaginationModule,
  ],
  providers: [
		{ provide: LOCALE_ID, useValue: 'pt' },
	],
  bootstrap: [
		AppComponent
	]
})
export class AppModule { }
