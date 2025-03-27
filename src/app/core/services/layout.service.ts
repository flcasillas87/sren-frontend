import { Injectable, signal, computed } from '@angular/core';
import { FooterContent } from '../../core/models/layout.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private snackBar: MatSnackBar) { }
  show(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}

//FooterContentService
export class FooterContentService {
  private footerContent = signal<FooterContent>({
    contactInfo: 'Dirección: 123 Calle Principal, Ciudad',
    links: [
      { title: 'Inicio', url: '/' },
      { title: 'Acerca de nosotros', url: '/about' },
      { title: 'Contacto', url: '/contact' },
    ],
    copyright: '© 2024 Todos los derechos reservados.',
  });

  getFooterContent() {
    console.log('Obteniendo contenido del footer...');
    return computed(() => this.footerContent());
  }

}