import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../model/user";


@Injectable()
export class UserService {
  private baseUrl: string = '/springapp';

  constructor (protected httpClient: HttpClient) {
  }

  public doLogin(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.baseUrl}/login`, {user: user});
  }

}
