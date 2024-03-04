import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'consultas',
    loadChildren: () =>
      import('./pages/consultas/consultas.routes').then(
        (m) => m.CONSULTAS_ROUTES
      ),
  },
  {
    path: 'transaccionalidad',
    loadChildren: () =>
      import('./pages/transaccionalidad/transaccionalidad.routes').then(
        (m) => m.TRANSACCIONALIDAD_ROUTES
      ),
  },
];
