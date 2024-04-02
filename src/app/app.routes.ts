import { Routes, RouterModule, ResolveStart } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { SettingsComponent } from './shared/components/settings/settings.component';
import { AdminComponent } from './shared/components/admin/admin.component';
import { UsersComponent } from './shared/components/admin/users/users.component';
import { RolesComponent } from './shared/components/admin/roles/roles.component';
import { TestComponent } from './shared/components/test/test.component';

export const routes: Routes = [
  {path: '', component: TestComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'test', component: TestComponent },

  { 
    path: 'admin', 
    component: AdminComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'roles', component: RolesComponent },
    ]
  },
];
