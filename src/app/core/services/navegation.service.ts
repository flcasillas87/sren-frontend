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
      icon: '',
      iconComponent: '',
      title: '',
      variant: '',
      divider: '',
    },
    {
      id: 1,
      url: 'card',
      label: 'Card',
      name: 'Card',
      href: '',
      icon: '',
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
      icon: '',
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
