import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from "../model/product";


@Injectable()
export class SearchService {
  private baseUrl: string = '/springapp/search';

  constructor (protected httpClient: HttpClient) {
  }

  public getSearchProducts(term: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/products`, {params: {term: term}});
  }

 /* public addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseUrl}/addProduct`, { product: product });
  }

  public removeProduct(id: number) {
    return this.httpClient.post<string>(`${this.baseUrl}/removeProduct`, {id: id});
  }*/
}
