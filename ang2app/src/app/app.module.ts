import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerService } from "./service/customer.service";
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductService } from "./service/product.service";
import { ProductSearchResultComponent } from './product-search-result/product-search-result.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import {SearchService} from "./service/search.service";
import {UserService} from "./service/user.service";
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent,
    ProductTableComponent,
    ProductSearchResultComponent,
    SearchResultListComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService, ProductService, SearchService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
