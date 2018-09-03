import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products: Product[] = [];
  newProduct: Product = {
    code: '', description: '', id: null, price: 0, producer: ''
  };
  addDialogVisible: string = 'none';

  constructor(protected productService: ProductService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.productService.getAll().subscribe(
      c => this.products = c
    )
  }

  showAddProductDialog() {
    this.addDialogVisible = 'block';
  }

  hideAddProductDialog() {
    this.addDialogVisible = 'none';
  }

  doAddProduct() {
    console.log(this.newProduct);
    this.productService.addProduct(this.newProduct).subscribe(
      p => this.products.push(p)
    );
    this.newProduct = { code: '', producer: '', price: 0, id: null, description: '' };
    this.hideAddProductDialog();
  }

}
