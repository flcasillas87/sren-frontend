import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {
  ISidebarAction,
  NavegationService,
} from '../../../core/services/navegation.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    SidebarHeaderComponent,
    SidebarNavComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  #visible = false;
  #onMobile = false;
  #layoutChangeSubscription!: Subscription;
  #stateToggleSubscription!: Subscription;



  #stateInitial = {
    narrow: false,
    visible: false,
    unfoldable: false,
  };



  constructor(private navegationService: NavegationService) {
  
  }
}
