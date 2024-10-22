import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { USER } from 'src/app/constants/mock.const';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { BasePage } from 'src/app/core/base-page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends BasePage implements OnInit {

  public registerGroup: FormGroup;

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.registerGroup = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      phone: [null, [Validators.required]]
    });

    this.registerGroup.patchValue({ ...USER, password: '123456789', confirmPassword: '123456789' });
  }

  async register() {
    this.navigateTo([APP_ROUTES.MEMBER]);
  }

  async login() {
    this.navigateTo([APP_ROUTES.START, APP_ROUTES.LOGIN]);
  }

}
