import { Routes } from '@angular/router';


export const routes: Routes = [
  //{ path: '**', component: },
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
        path: 'admin', 
        loadComponent: () => import('./shared/components/admin/admin.component'),
      },
      { 
        path: 'card', 
        loadComponent: () => import('./core/card/card.component'),
      },
    ]

  },
];
