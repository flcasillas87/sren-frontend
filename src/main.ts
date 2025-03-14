/// <reference types="@angular/localize" />

// Importaciones necesarias para arrancar la aplicación Angular
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Arrancar la aplicación Angular con el componente raíz y la configuración
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Error al arrancar la aplicación:', err));