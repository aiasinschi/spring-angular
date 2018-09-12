import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from "../model/menu-item";
import {Constants} from "../util/constants";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    {index: 0, label: 'Search', code: Constants.MY_SEARCH},
    {index: 1, label: 'My Products', code: Constants.MY_PRODUCTS},
    {index: 2, label: 'My Contacts', code: Constants.MY_CONTACTS},
    {index: 3, label: 'My Account', code: Constants.MY_ACCOUNT},
  ];
  @Input()
  activeMenu: MenuItem;
  @Output()
  notify: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit() {
  }

  doSelect(menuItem: MenuItem) {
    this.activeMenu = menuItem;
    console.log('Active menu is ' + this.activeMenu.label);
    this.notify.emit(this.activeMenu);
  }
}
