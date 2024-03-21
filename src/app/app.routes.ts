import { Routes } from '@angular/router';
import { HomeComponent } from './admin/pages/home/home.component';
import { authGuard } from './core/guards/auth.guard';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: "home",
    component: HomeComponent,
    /* canActivate: [authGuard] */
  },
  {
    path: 'page',
    /* canActivate: [authGuard], */
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
