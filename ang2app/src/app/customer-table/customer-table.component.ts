import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.customerService.getAll().subscribe(
      c => this.customers = c
    )
  }

}
