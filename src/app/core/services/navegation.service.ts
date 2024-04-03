import { Injectable } from '@angular/core';
import { INavData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  // Implementa métodos y lógica para gestionar el diseño dinámico

  constructor() {}
  getNavData(): INavData[] {
    return [
      { name: 'Inicio', href: '/home' },
      { name: 'Servicios', href: '/services' },
      { name: 'Contacto', href: '/contact'},
      { name: 'Acerca de', href: '#' },
    ];
  }
}
