import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {Producer} from "../model/producer";

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit {

  results: Product[];
  term: string;

  constructor() { }

  ngOnInit() {
    this.results = [];
    this.term = '';
  }

  doSearch() {
    console.log(this.term);
    this.results = [
      <Product>{
        id: 1,
        name: 'Paper A4',
        description: 'Paper A4 size, 160gr/m2, white',
        producer: <Producer> {
          id: 1,
          name: 'Office Paper Supplies inc.'
        }
      },
      <Product>{
        id: 1,
        name: 'Paper clip',
        description: 'Paper clip, multi colour',
        producer: <Producer> {
          id: 1,
          name: 'Bureau Supplies lts.'
        }
      }
    ];
  }

}
