import { Component, Injector, OnInit } from '@angular/core';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { BasePage } from 'src/app/core/base-page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  async login() {
    try {
      // await this.authService.login(credentials);
      this.navigateTo([APP_ROUTES.MAIN]);
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  register() {
    this.navigateTo([APP_ROUTES.START, APP_ROUTES.REGISTER]);
  }

}
