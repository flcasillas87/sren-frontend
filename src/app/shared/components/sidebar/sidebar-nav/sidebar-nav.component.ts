import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationModel } from '../../../../core/models/navigation.model';

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [MatListModule, MatIcon],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.css',
})
export class SidebarNavComponent {
  menuItems: NavigationModel[] = [
    {
      id: '',
      url: '',
      label: 'string',
      name: 'string',
      href: 'string',
      icon: 'home',
      iconComponent: 'any',
      title: 'string',
      variant: 'string',
      divider: 'string',
    },
    {
      id: '',
      url: '',
      label: 'string',
      name: 'string',
      href: 'string',
      icon: 'dashboard',
      iconComponent: 'any',
      title: 'string',
      variant: 'string',
      divider: 'string',
    },
    {
      id: '',
      url: '',
      label: 'string',
      name: 'string',
      href: 'string',
      icon: 'app_registration',
      iconComponent: 'any',
      title: 'string',
      variant: 'string',
      divider: 'string',
    },
    {
      id: '',
      url: '',
      label: 'string',
      name: 'Precios',
      href: 'string',
      icon: 'attach_money',
      iconComponent: 'any',
      title: 'string',
      variant: 'string',
      divider: 'string',
    },
  ];
}
