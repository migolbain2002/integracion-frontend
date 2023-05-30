import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentTab = localStorage.getItem("tabMenu");

  selectTab(tab: string) {
    this.currentTab = tab;
    localStorage.setItem("tabMenu", tab.toString());
  }
}
