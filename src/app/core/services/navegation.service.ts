import { Injectable } from '@angular/core';
import { navItems } from '../models/navigation.model';
import { INavData } from '../interfaces/navigation.interface';

// Servicio para gestionar el diseño dinámico de la navegación

@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  // Implementa métodos y lógica para gestionar el diseño dinámico
  // Modelo de datos para la navegación
  
     INavData[] = navItems;
  constructor() { }

  // Devuelve el modelo de datos para la navegación
  getNavigationItems(): INavData[] {
    return this.navItems;
  }

  // Añade un nuevo elemento de navegación al modelo de datos
  addNavigationItem(newItem: INavData): void {
    this.navItems.push(newItem);
  }

  // Elimina un elemento de navegación del modelo de datos
  removeNavigationItem(itemToRemove: INavData): void {
    this.navItems = this.navItems.filter((item) => item !== itemToRemove);
  }
  
  // Actualiza un elemento de navegación del modelo de datos
  updateNavigationItem(itemToUpdate: INavData, updatedItem: INavData): void {
    const index = this.navItems.indexOf(itemToUpdate);
    if (index !== -1) {
      this.navItems[index] = updatedItem;
    }
  }
    // Devuelve el elemento de navegación con el ID especificado
  getNavigationItemById(id: string): INavData | undefined {
    return this.navItems.find((item) => item.id === id);
  }

  
  }

