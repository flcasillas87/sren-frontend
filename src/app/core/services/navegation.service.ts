import { Injectable, inject } from '@angular/core';
import { INavData } from '../interfaces/navigation.interface';
import { NavigationModel } from '../models/navigation.model';
import { get } from 'jquery';

// Servicio para gestionar el diseño dinámico de la navegación
@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  // Datos de navegación
  private navigationModel: NavigationModel = inject(NavigationModel);
  //menuItems: NavigationModel[] = [];
  menuItems = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  // Método para obtener los elementos de navegación

  getMenuItems() {
    return this.menuItems;
  }

  constructor() {}
}
