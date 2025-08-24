import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

/**
 * Centraliza los módulos de Angular Material y las animaciones para su uso global.
 * Agrega o elimina módulos de Material aquí para mantener la consistencia en toda la app.
 */
const MATERIAL_MODULES = [
  MatSnackBarModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  // Agrega aquí otros módulos de Angular Material según necesidad
];

export const provideMaterialModules = () => [
  provideAnimations(),
  importProvidersFrom(...MATERIAL_MODULES),
];