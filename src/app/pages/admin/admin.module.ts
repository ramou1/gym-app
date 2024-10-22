import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/constants/routes.const';
import { HomePage } from './home/home.page';
import { ProfilePage } from './profile/profile.page';
import { WorkoutsPage } from './workouts/workouts.page';
import { ComponentsModule } from 'src/app/components/components.module';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: APP_ROUTES.HOME,
        component: HomePage,
        // loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: APP_ROUTES.WORKOUTS,
        component: WorkoutsPage
      },
      {
        path: APP_ROUTES.PROFILE,
        component: ProfilePage,
      },
      // {
      //   path: APP_ROUTES.PRIVACY,
      //   component: PrivacyPage,
      // },
      {
        path: '',
        redirectTo: APP_ROUTES.HOME,
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [AdminComponent, HomePage, WorkoutsPage, ProfilePage],
})
export class AdminModule { }
