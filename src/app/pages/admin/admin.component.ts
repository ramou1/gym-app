import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
})
export class AdminComponent implements OnInit {

  tabClicked = 'home';
  constructor() { }

  ngOnInit() {}

  changeTab(tab: string) {
    this.tabClicked = tab;
  }

}
