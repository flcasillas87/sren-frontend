import { Injectable, inject } from '@angular/core';
import { MenuItem } from '../models/navigation.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menuItems: MenuItem[] = [
    {
      id: 0,
      url: "name",
      label: "hola",
      name: "nombre 1",
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
