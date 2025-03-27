import { Routes } from '@angular/router'; // Importa Routes para definir las rutas de la aplicación.
import { LayoutComponent } from './shared/components/layout/layout.component'; // Importa el componente Layout
import { FooterComponent } from './shared/components/footer/footer.component';

// Define las rutas de la aplicación.
export const routes: Routes = [
  {
    path: '',
    component: FooterComponent, 
  },
  { 
    path: '**', 
    redirectTo: ''
  }, // Redirige cualquier ruta no encontrada a '/home'.
];