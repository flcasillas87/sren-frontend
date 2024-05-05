import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



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

}
