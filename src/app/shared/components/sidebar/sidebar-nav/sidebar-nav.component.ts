import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { MenuService } from '../../../../core/services/navegation.service';
import { MenuItem } from '../../../../core/models/navigation.model';

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css'],
})
export class SidebarNavComponent {
  readonly menuItems: MenuItem[] = [];

  constructor(private readonly menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }
}
