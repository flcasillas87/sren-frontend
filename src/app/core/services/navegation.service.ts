import { Injectable, inject } from '@angular/core';
import { NavigationModel } from '../models/navigation.model';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { get } from 'jquery';
export interface ISidebarAction {}

// Servicio para gestionar el diseño dinámico de la navegación
@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  menuItems: NavigationModel[]=[];

  private isCollapsed: boolean = true;
  private isCollapsedSubject = new BehaviorSubject<boolean>(true);
  private isCollapsed$ = this.isCollapsedSubject.asObservable();
  private sidebarState = new BehaviorSubject<ISidebarAction>({}); //REVISAR
  sidebarState$ = this.sidebarState.asObservable();

  constructor() {}

  // Método para obtener los elementos del menú
  getMenuItems(): NavigationModel[] {
    return this.menuItems;
  }

  // Método para agregar un elemento al menú
  addMenuItem(item: NavigationModel) {
    this.menuItems.push(item);
  }

}
