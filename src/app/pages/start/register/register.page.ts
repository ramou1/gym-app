import { Component, Injector, OnInit } from '@angular/core';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { BasePage } from 'src/app/core/base-page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends BasePage implements OnInit {

  constructor(public injector: Injector) { 
    super(injector);
  }

  ngOnInit() {
  }

  async register() {
    this.navigateTo([APP_ROUTES.MAIN]);
  }

  async login() {
    this.navigateTo([APP_ROUTES.START, APP_ROUTES.LOGIN]);
  }

}
