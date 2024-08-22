import { Routes } from '@angular/router';

import { TestComponent } from './shared/components/test/test.component';
import { CardComponent } from './core/card/card.component';
import { TableComponent } from './core/table/table.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

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
    ]

  },
];
