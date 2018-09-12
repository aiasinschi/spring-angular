import {Component, OnInit} from '@angular/core';
import {User} from "./model/user";
import {UserService} from "./service/user.service";
import {Constants} from "./util/constants";
import {MenuItem} from "./model/menu-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Business connector';
  loggedUser: User;
  loggedIn: boolean = false;

  readonly MY_SEARCH = Constants.MY_SEARCH;
  readonly MY_ACCOUNT = Constants.MY_ACCOUNT;
  readonly MY_CONTACTS = Constants.MY_CONTACTS;
  readonly MY_PRODUCTS = Constants.MY_PRODUCTS;

  selectedMenu: MenuItem = {index: 0, label: '', code: this.MY_SEARCH};



  constructor(private userService: UserService) { }

  ngOnInit() {
    var logged = window.localStorage.getItem('loggedUser');
    if (logged) {
      console.log(logged);
      this.loggedUser = JSON.parse(logged);
      this.loggedIn = true;
    } else {
      this.loggedUser = <User>{
        username: '',
        name: '',
        password: ''
      }
    }
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  doLogin() {
    this.userService.doLogin(this.loggedUser).subscribe(
      user => {
        this.loggedUser = user;
        this.loggedIn = true;
        window.localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
      }
    );
  }

  doLogout() {
    this.loggedIn = false;
    this.loggedUser = <User> {};
    window.localStorage.removeItem('loggedUser');
  }

  onNotify(menuItem: MenuItem) {
    this.selectedMenu = menuItem;
  }
}
