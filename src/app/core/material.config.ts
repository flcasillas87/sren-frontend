// app/core/material.config.ts

import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

export const provideMaterial = () => [
  provideAnimations(),
  importProvidersFrom(
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  )
];