import { Injectable, inject } from '@angular/core';
import { NavigationModel } from '../models/navigation.model';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { get } from 'jquery';


export interface ISidebarAction {
  unfoldable?: boolean | 'toggle';
  visible?: boolean | 'toggle';
  toggle?: 'visible' | 'unfoldable';
  narrow?: boolean;
  mobile?: boolean;
  //sidebar?: SidebarComponent;
  id?: string;
}



// Servicio para gestionar el diseño dinámico de la navegación
@Injectable({
  providedIn: 'root',
})
export class NavegationService {
  private menuItems: NavigationModel[] = [];
  private isCollapsed: boolean = true;
  private isCollapsedSubject = new BehaviorSubject<boolean>(true);
  private isCollapsed$ = this.isCollapsedSubject.asObservable();
  private sidebarState = new BehaviorSubject<ISidebarAction>({});//REVISAR
  sidebarState$ = this.sidebarState.asObservable();



  constructor() {}

  //revisar
  toggle(action: ISidebarAction): void {
    this.sidebarState.next(action);
  }

  // Método para obtener los elementos del menú
  getMenuItems(): NavigationModel[] {
    return this.menuItems;
  }

  // Método para agregar un elemento al menú
  addMenuItem(item: NavigationModel) {
    this.menuItems.push(item);
  }


  // Método para obtener un elemento del menú por su ID
  //getNavigationModelById(id: number): Observable<NavigationModel> {
  //  return of(this.navigationModel.find((item) => item.id === id));
  //}

  // Método para alternar la colapsada del menú
  toggleCollapsed(isCollapsed: boolean) {
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value);
  }
}
