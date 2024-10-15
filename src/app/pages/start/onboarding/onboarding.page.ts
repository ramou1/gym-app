import { Component, Injector, OnInit } from '@angular/core';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { BasePage } from 'src/app/core/base-page';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage extends BasePage implements OnInit {

  constructor(public injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

  skip() {
    this.navigateTo([APP_ROUTES.START, APP_ROUTES.LOGIN]);
  }

}
