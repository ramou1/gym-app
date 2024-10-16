import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  userName: string = 'John Doe';  // Pode ser dinâmico
  greeting: string;

  ngOnInit() {
    this.setGreeting();
  }

  setGreeting() {
    const currentHour = moment().hour(); // Ou use new Date().getHours() se preferir o nativo

    if (currentHour >= 5 && currentHour < 12) {
      this.greeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Night';
    }
  }
}