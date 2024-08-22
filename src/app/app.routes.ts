import { Routes } from '@angular/router';

import { AdminComponent } from './shared/components/admin/admin.component';
import { AdressformComponent } from './shared/components/adressform/adressform.component';
import { TestComponent } from './shared/components/test/test.component';
import { CardComponent } from './core/card/card.component';
import { TableComponent } from './core/table/table.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  //{ path: '**', component: },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'adresform', component: AdressformComponent },
      { path: 'layout', component: LayoutComponent },
      { path: 'loader', component: LoaderComponent },
      { path: 'test', component: TestComponent },
      { path: 'card', component: CardComponent },
      { path: 'table', component: TableComponent },
    ],
  },
];
