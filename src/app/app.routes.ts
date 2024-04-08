import { Routes, RouterModule, ResolveStart } from '@angular/router';

import { TestComponent } from './shared/components/test/test.component';
import { CardComponent } from './shared/components/card/card.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { TableComponent } from './shared/components/table/table.component';

export const routes: Routes = [
  { path: '', component: NavigationComponent },
  {
    path: '/test',
    component: TestComponent,
  },
  {
    path: '/card',
    component: CardComponent,
  },

  {
    path: '/dashboard',
    component: DashboardComponent,
  },
  {
    path: '/tabla',
    component: TableComponent,
  },

  {
    path: '/navigation',
    component: NavigationComponent,
  },
];
