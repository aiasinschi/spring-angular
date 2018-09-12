import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product";
import {Producer} from "../model/producer";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products: Product[] = [];
  newProduct: Product = {
    customDescription: '', id: null
  };
  codePrefix: string = 'PRODD';
  addDialogVisible: string = 'none';

  constructor(protected productService: ProductService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    var logged = window.localStorage.getItem('loggedUser');
    var currentUser = JSON.parse(logged);
    this.productService.getAll(currentUser.id).subscribe(
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
    this.newProduct = { id: null, description: '' };
    this.hideAddProductDialog();
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id).subscribe(
      message => { if (message) { alert(message); } this.refreshData(); }
    );
  }
}
