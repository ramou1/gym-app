import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './constants/routes.const';

const routes: Routes = [
  {
    path: APP_ROUTES.START,
    loadChildren: () => import('./pages/start/start.module').then(m => m.StartModule)
  },
  {
    path: APP_ROUTES.ADMIN,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    // canActivate: [RoleGuard]
  },
  {
    path: APP_ROUTES.MEMBER,
    loadChildren: () => import('./pages/member/member.module').then(m => m.MemberModule),
    // canActivate: [RoleGuard]
  },
  {
    path: '',
    redirectTo: APP_ROUTES.START,
    pathMatch: 'full',
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
