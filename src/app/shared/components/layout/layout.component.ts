import { Component, computed, effect, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { SidenavService } from '../../../core/services/sidenav.service';
import { SidebarNavComponent } from '../sidebar/sidebar-nav/sidebar-nav.component';
import { SidebarHeaderComponent } from '../sidebar/sidebar-header/sidebar-header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterOutlet,
    SidebarNavComponent,
    SidebarHeaderComponent,
    FooterComponent,
  ],
})
export class LayoutComponent {
  // Servicios inyectados con inject()
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly sidenavService = inject(SidenavService);

  // Detecta si la pantalla es móvil
  readonly isHandset = signal(false);

  // Estado del sidenav usando signal()
  readonly isSidenavOpen = this.sidenavService.sidenavOpen$;

  constructor() {
    // Actualiza isHandset cuando cambia el breakpoint
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isHandset.set(result.matches);
      console.log('Detectando tamaño de pantalla:', result.matches ? 'Móvil' : 'Escritorio');
    });

    // Efecto para detectar cambios en el sidenav
    effect(() => {
      console.log('Estado del sidenav:', this.isSidenavOpen() ? 'Abierto' : 'Cerrado');
    });
  }

  // Métodos para manejar el sidenav
  toggleSidenav(): void {
    console.log('Toggling sidenav...');
    this.sidenavService.toggleSidenav();
  }
}