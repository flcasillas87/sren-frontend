import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';

import { SidebarNavComponent } from '../sidebar/sidebar-nav/sidebar-nav.component';
import { SidebarHeaderComponent } from '../sidebar/sidebar-header/sidebar-header.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    SidebarNavComponent,
    SidebarHeaderComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
})
export default class LayoutComponent {
  // Inyecta el servicio BreakpointObserver para detectar cambios en los puntos de interrupción de la pantalla
  private readonly breakpointObserver = inject(BreakpointObserver);

  // Observable que emite true si la pantalla es de tamaño "handset" (dispositivo móvil)
  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  // Propiedad para controlar el estado del sidenav
  isSidenavOpen = true;

  // Método para abrir el sidenav
  openSidenav(): void {
    this.isSidenavOpen = true;
  }

  // Método para cerrar el sidenav
  closeSidenav(): void {
    this.isSidenavOpen = false;
  }

  // Método para alternar el tema de la aplicación
  toggleTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  // Método para manejar el inicio de sesión del usuario
  login(): void {
    // Lógica para iniciar sesión
  }

  // Método para manejar el cierre de sesión del usuario
  logout(): void {
    // Lógica para cerrar sesión
  }
}