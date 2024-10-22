import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { USERS } from 'src/app/constants/mock.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @Input() data: any;
  @ViewChild('membersSearchbar') searchbar: IonSearchbar;
  public members: any;
  public filteredMembers: any = [];

  constructor() { }

  ngOnInit() {
    this.members = USERS;
  }

  public filterList(evt: any): void {
    const searchTerm = evt.target.value;

    if (searchTerm === '') {
      this.filteredMembers = [];
    }
    else {
      this.filteredMembers = this.members?.filter((data: any) => {
        return data.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || data.cpf.toString().indexOf(searchTerm) > -1;
      }).slice(0, 15);
    }
  }

  public openMemberDetails(member: any): void {
    console.log(member);
  }

}
