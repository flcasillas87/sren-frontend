import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationModel } from '../../../../core/models/navigation.model';
import { NavegationService } from '../../../../core/services/navegation.service';

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [MatListModule, MatIcon],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.css',
})
export class SidebarNavComponent {
  menuItems: NavigationModel[];

  constructor(public navegationService: NavegationService) {
    this.menuItems = this.navegationService.getMenuItems();
  }
}
