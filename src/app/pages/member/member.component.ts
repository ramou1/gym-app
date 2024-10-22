import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: 'member.component.html',
  styleUrls: ['member.component.scss']
})
export class MemberComponent implements OnInit {

  tabClicked = 'home';
  constructor() { }

  ngOnInit() {}

  changeTab(tab: string) {
    this.tabClicked = tab;
  }

}
