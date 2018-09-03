import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from "../model/customer";


@Injectable()
export class CustomerService {
  private baseUrl: string = '/springapp/customers';

  constructor (protected httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);
  }

}

