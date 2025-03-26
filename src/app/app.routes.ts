import { Routes } from '@angular/router'; // Importa Routes para definir las rutas de la aplicación.
import { LayoutComponent } from './shared/components/layout/layout.component'; // Importa el componente Layout

// Define las rutas de la aplicación.
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, 
  },
  { 
    path: '**', 
    redirectTo: '/home' }, // Redirige cualquier ruta no encontrada a '/home'.
];