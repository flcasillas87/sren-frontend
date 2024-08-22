import { Injectable, inject } from '@angular/core';
import { MenuItem } from '../models/navigation.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menuItems: MenuItem[] = [
    {
      id: 0,
      url: 'admin',
      label: 'hola',
      name: 'Admin',
      href: '',
      icon: 'home',
      iconComponent: '',
      title: '',
      variant: '',
      divider: '',
    },
    {
      id: 1,
      url: 'dashboard',
      label: 'dashboard',
      name: 'Dashboard',
      href: '',
      icon: 'newspaper',
      iconComponent: '',
      title: '',
      variant: '',
      divider: '',
    },
    {
      id: 2,
      url: 'table',
      label: 'Tablas',
      name: 'Tablas',
      href: '',
      icon: 'monitoring',
      iconComponent: '',
      title: '',
      variant: '',
      divider: '',
    },
    {
      id: 3,
      url: 'card',
      label: 'card',
      name: 'Card',
      href: '',
      icon: 'monitoring',
      iconComponent: '',
      title: '',
      variant: '',
      divider: '',
    },
  ];

  // Método para obtener los elementos del menú
  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  // Método para agregar un elemento al menú
  addMenuItem(item: MenuItem) {
    this.menuItems.push(item);
  }
}
