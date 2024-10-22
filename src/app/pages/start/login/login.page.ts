import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { BasePage } from 'src/app/core/base-page';
import { FormBuilder } from '@angular/forms';

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
      emailCpf: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.loginGroup.patchValue({ emailCpf: 'aluno@gmail.com', password: '123456789' });
  }

  handleChange(e: any): void {
    if(e.detail.value === 'admin') {
      this.loginGroup.get('emailCpf').setValue('admin@gmail.com');
    }
    else {
      this.loginGroup.get('emailCpf').setValue('aluno@gmail.com');
    }
  }

  onEmailCpfInput(event: any): void {
    const input = event.detail.value;

    if (this.isCpf(input)) {
      // Se o valor for um CPF, aplique a máscara
      this.loginGroup.get('emailCpf').setValue(this.applyCpfMask(input));
    }
  }

  private isCpf(value: string): boolean {
    // Considera CPF se tiver apenas números e pelo menos 11 dígitos
    const cpfPattern = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
    return cpfPattern.test(value.replace(/\D/g, ''));
  }

  private applyCpfMask(value: string): string {
    const cleanedValue = value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    const match = cleanedValue.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    return value; // Retorna o valor sem modificação se não houver correspondência
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
