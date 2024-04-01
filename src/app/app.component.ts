import { Component,OnInit } from '@angular/core';
import $ from "jquery";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AdressformComponent } from './components/adressform/adressform.component';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routing } from './app.routes';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavigationComponent,
    DashboardComponent,
    HeaderComponent,
    AdressformComponent,
    FooterComponent,
    NavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'sren';
  
}
