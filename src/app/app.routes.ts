import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'table', component: TableComponent },
];
export const routing = RouterModule.forRoot(routes);
