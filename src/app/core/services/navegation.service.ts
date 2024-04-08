import { Injectable } from '@angular/core';
import { INavData } from '../interfaces/navigation.interface';
import { NavigationModel } from '../models/navigation.model';

// Servicio para gestionar el diseño dinámico de la navegación

@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  private iNavData: INavData[] = [
    new NavigationModel('0', 'Test', '/Test'),
    new NavigationModel('1', 'Card', '/Card'),
    new NavigationModel('2', 'Dashboard', '/Dashboard'),
    new NavigationModel('3', 'Form', '/Form'),
    new NavigationModel('4', 'Table', '/Table'),
  ];

  constructor() {}

  // Devuelve el modelo de datos para la navegación
  getNavigationItems(): INavData[] {
    return this.iNavData;
  }

  // Añade un nuevo elemento a la navegación
  addNavigationItem(iNavData: INavData): void {
    this.iNavData.push(iNavData);
  }

  // Elimina un elemento de la navegación
  deleteNavigationItem(iNavData: INavData): void {
    this.iNavData.splice(this.iNavData.indexOf(iNavData), 1);
  }

  // Actualiza un elemento de la navegación
  updateNavigationItem(iNavData: INavData): void {
    const index = this.iNavData.indexOf(iNavData);
    this.iNavData[index] = iNavData;
  }
}
