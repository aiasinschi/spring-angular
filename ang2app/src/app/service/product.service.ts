import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductOld} from "../model/productold";


@Injectable()
export class ProductService {
  private baseUrl: string = '/springapp';

  constructor (protected httpClient: HttpClient) {
  }

  public getAll(): Observable<ProductOld[]>{
    return this.httpClient.get<ProductOld[]>(`${this.baseUrl}/products`);
  }

  public addProduct(product: ProductOld): Observable<ProductOld> {
    return this.httpClient.post<ProductOld>(`${this.baseUrl}/addProduct`, { product: product });
  }

  public removeProduct(id: number) {
    return this.httpClient.post<string>(`${this.baseUrl}/removeProduct`, {id: id});
  }
}
