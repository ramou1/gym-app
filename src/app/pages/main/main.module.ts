import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/constants/routes.const';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: APP_ROUTES.HOME,
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      // {
      //   path: APP_ROUTES.EVENTS,
      //   loadChildren: () => import('./events/events.module').then(m => m.EventsPageModule)
      // },
      // {
      //   path: APP_ROUTES.EVENT_DETAILS,
      //   component: EventDetailsPage
      // },
      {
        path: APP_ROUTES.PROFILE,
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      // {
      //   path: APP_ROUTES.PRIVACY,
      //   component: PrivacyPage,
      // },
      // {
      //   path: APP_ROUTES.TERMS,
      //   component: TermsPage,
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
    // ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [MainComponent]
})
export class TabsPageModule { }
