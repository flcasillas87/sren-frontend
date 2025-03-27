import { Injectable, signal, computed } from '@angular/core';
import { FooterContent } from '../../../core/models/layout.model';

@Injectable({
  providedIn: 'root',
})
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
