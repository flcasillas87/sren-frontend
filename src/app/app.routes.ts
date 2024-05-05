import { Routes } from '@angular/router';

import { TestComponent } from './shared/components/test/test.component';
import { CardComponent } from './shared/components/card/card.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { TableComponent } from './shared/components/table/table.component';
import { LoaderComponent } from './shared/components/loader/loader.component';

export const routes: Routes = [


  
  { path: 'loader', component: LoaderComponent },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },

  {
    path: 'navigation',
    component: NavigationComponent,
  },

  {
    path: 'navigation',
    component: NavigationComponent,
  },

  {
    path: 'navigation',
    component: NavigationComponent,
  },
];
