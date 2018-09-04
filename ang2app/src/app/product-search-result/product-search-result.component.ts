import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.css']
})
export class ProductSearchResultComponent implements OnInit {

  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

  openProducerPage(id: number) {
    console.log(`Opening producer page ${id}...`);
  }
}
