import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from "../model/product";


@Injectable()
export class ProductService {
  private baseUrl: string = '/springapp';

  constructor (protected httpClient: HttpClient) {
  }

  public getAll(producerId): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/products`, {params: {producerId: producerId}});
  }

  public addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseUrl}/addProduct`, { product: product });
  }

  public removeProduct(id: number) {
    return this.httpClient.post<string>(`${this.baseUrl}/removeProduct`, {id: id});
  }
}
