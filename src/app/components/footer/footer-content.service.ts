import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FooterContent } from './footer-content.interface';

@Injectable({
  providedIn: 'root',
})
export class FooterContentService {
  getFooterContent(): Observable<FooterContent> {
    const footerContent: FooterContent = {
      contactInfo: 'Dirección: 123 Calle Principal, Ciudad',
      links: [
        { title: 'Inicio', url: '/' },
        { title: 'Acerca de nosotros', url: '/about' },
        { title: 'Contacto', url: '/contact' },
      ],
      copyright: '© 2024 Todos los derechos reservados.',
    };
    return of(footerContent);
  }
}
