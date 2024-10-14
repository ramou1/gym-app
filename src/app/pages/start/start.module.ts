import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { LoginPage } from './login/login.page';
import { OnboardingPage } from './onboarding/onboarding.page';
import { RegisterPage } from './register/register.page';

// const SHOW_ONBOARDING = localStorage.getItem(STORAGE.SHOW_ONBOARDING);
// const INITIAL_ROUTE = SHOW_ONBOARDING === '0' ? APP_ROUTES.INITIAL_CHOICE : APP_ROUTES.ONBOARDING;
const INITIAL_ROUTE = APP_ROUTES.ONBOARDING;

const routes: Routes = [
  {
    path: APP_ROUTES.ONBOARDING,
    component: OnboardingPage,
  },
  {
    path: APP_ROUTES.LOGIN,
    component: LoginPage,
  },
  {
    path: APP_ROUTES.REGISTER,
    component: RegisterPage,
  },
//   {
//     path: APP_ROUTES.RECOVER_PASSWORD,
//     component: RecoverPasswordPage,
//   },
  {
    path: '',
    redirectTo: INITIAL_ROUTE,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    // ComponentsModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginPage,
    OnboardingPage,
    RegisterPage,
    // RecoverPasswordPage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StartModule { }
