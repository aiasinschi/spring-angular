import {Component, OnInit} from '@angular/core';
import {User} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Business connector';
  loggedUser: User;
  loggedIn: boolean = false;

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
    this.loggedIn = true;
    this.loggedUser.name = 'User Name';
    window.localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
  }

  doLogout() {
    this.loggedIn = false;
    this.loggedUser = <User> {};
    window.localStorage.removeItem('loggedUser');
  }
}
