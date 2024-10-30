import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { BasePage } from 'src/app/core/base-page';
import { FormBuilder } from '@angular/forms';
import { USER, USERS } from 'src/app/constants/mock.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {

  public loginGroup: FormGroup;
  private cpfMask = '000.000.000-00';

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

    this.loginGroup.patchValue({ email: 'aluno@gmail.com', password: '123456789' });
  }

  handleChange(e: any): void {
    if (e.detail.value === 'admin') {
      this.loginGroup.get('email').setValue(USERS[0].email);
    }
    else {
      this.loginGroup.get('email').setValue(USER.email);
    }
  }

  async login() {
    try {
      const formData = this.loginGroup.value;
      const user = USERS.find(u => u.email === formData.email || u.cpf === formData.cpf);
      // await this.authService.login(formData);
      // const user = await this.authService.login(formData);

      // Verifica o role do usuário retornado
      if (user.role === 'admin') {
        // Redireciona para a página do admin
        this.router.navigate([APP_ROUTES.ADMIN]);
      } else if (user.role === 'member') {
        // Redireciona para a página do membro
        this.router.navigate([APP_ROUTES.MEMBER]);
      } else {
        // Se o role for desconhecido, redireciona para uma página de erro ou logout
        this.router.navigate(['/unauthorized']);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  }

  register() {
    this.navigateTo([APP_ROUTES.START, APP_ROUTES.REGISTER]);
  }

  signUpWithGoogle() {
    // this.authService.signUpWithGoogle();
  }

  signUpWithFacebook() {
    // this.authService.signUpWithFacebook();
  }
}
