import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      { 
        path: 'admin', 
        loadComponent: () => import('./shared/components/admin/admin.component'),
      },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./shared/components/dashboard/dashboard.component'),
      },
      { 
        path: 'precios', 
        loadComponent: () => import('./shared/components/precios/precios.component'),
      },
      { 
        path: 'card', 
        loadComponent: () => import('./core/card/card.component'),
      },
    ]
  },
  // Uncomment and define a component to handle unknown routes
  // { path: '**', component: PageNotFoundComponent },
];
