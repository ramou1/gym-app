import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

export abstract class BasePage {
    protected router: Router;
    protected navCtrl: NavController;
    protected alertCtrl: AlertController;

    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.navCtrl = injector.get(NavController);
        this.alertCtrl = injector.get(AlertController);
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
