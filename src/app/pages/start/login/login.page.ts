import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { BasePage } from 'src/app/core/base-page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {

  public loginGroup: FormGroup;

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginGroup = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.loginGroup.patchValue({ email: 'teste@gmail.com', password: '123456789' });
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
