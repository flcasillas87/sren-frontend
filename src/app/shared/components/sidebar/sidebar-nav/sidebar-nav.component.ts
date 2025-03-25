import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { MenuService } from '../../../../core/services/navegation.service';
import { MenuItem } from '../../../../core/models/navigation.model';

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatFormFieldModule, MatInputModule, RouterModule],
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css'],
})
export class SidebarNavComponent implements OnInit {
  // Propiedad para almacenar los elementos del menú
  menuItems: MenuItem[] = [];

  // Inyecta el servicio MenuService
  constructor(private readonly menuService: MenuService) {}

  // Método ngOnInit que se ejecuta al inicializar el componente
  ngOnInit(): void {
    // Suscribirse al Observable que emite los elementos del menú
    this.menuService.getMenuItems().subscribe(items => {
      this.menuItems = items;
    });
  }

  // Método para agregar un nuevo elemento al menú
  addMenuItem(): void {
    const newItem: MenuItem = {
      id: this.menuItems.length,
      url: 'new-item',
      label: 'New Item',
      name: 'New Item',
      href: '',
      icon: 'add',
      divider: false,
    };
    this.menuService.addMenuItem(newItem);
  }

  // Método para actualizar un elemento del menú existente
  updateMenuItem(id: string | number): void {
    const updatedItem: MenuItem = {
      id,
      url: 'updated-item',
      label: 'Updated Item',
      name: 'Updated Item',
      href: '',
      icon: 'edit',
      divider: false,
    };
    this.menuService.updateMenuItem(id, updatedItem);
  }

  // Método para eliminar un elemento del menú
  deleteMenuItem(id: string | number): void {
    this.menuService.deleteMenuItem(id);
  }

  // Método para filtrar elementos del menú
  filterMenuItems(): void {
    this.menuService.filterMenuItems(item => item.name.includes('Admin')).subscribe(filteredItems => {
      this.menuItems = filteredItems;
    });
  }

  // Método para manejar el evento de entrada y buscar elementos del menú
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value;
    this.searchMenuItems(searchTerm);
  }

  // Método para buscar elementos del menú
  searchMenuItems(searchTerm: string): void {
    this.menuService.searchMenuItems(searchTerm).subscribe(searchedItems => {
      this.menuItems = searchedItems;
    });
  }
}