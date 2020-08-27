import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchResultComponent } from './search-result/search-result.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyNewsComponent } from './company-news/company-news.component';
import { CompanyStockComponent } from './company-stock/company-stock.component';
import { RouterService } from 'src/app/services/router.service';
import { DataService } from 'src/app/services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SearchResultComponent,
    DashboardCardComponent,
    CompanyDetailsComponent,
    CompanyNewsComponent,
    CompanyStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [RouterService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
