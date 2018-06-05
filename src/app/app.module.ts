import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form.component';
import { TableComponent } from './table.component';
// import { PagerService } from './pager';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


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
		OwlDateTimeModule, 
		OwlNativeDateTimeModule
  ],
  providers: [
		// PagerService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
