import { Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

export abstract class BasePage {
    protected alertCtrl: AlertController;
    protected fb: FormBuilder;
    protected navCtrl: NavController;
    protected router: Router;    

    constructor(injector: Injector) {
        this.alertCtrl = injector.get(AlertController);
        this.fb = injector.get(FormBuilder);
        this.navCtrl = injector.get(NavController);
        this.router = injector.get(Router);
    }

    navigateTo(path: string[]) {
        this.router.navigate(path);
    }

    async showAlert(message: string) {
        const alert = await this.alertCtrl.create({
            header: 'Info',
            message: message,
            buttons: ['OK']
        });
        await alert.present();
    }
}
