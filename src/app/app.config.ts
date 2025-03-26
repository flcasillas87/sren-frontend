import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { firebaseProviders } from './firebase.config';
import { provideStore } from '@ngrx/store'; // Importa la función provideStore para proporcionar el almacenamiento de la aplicación.
import { reducers } from './app.state'; // Importa los reducers de NgRx.
import { authReducer, initialState } from './auth.reducer'; // Importa el reducer y el estado inicial del módulo de autenticación.
import { provideEffects } from '@ngrx/effects'; // Importa la función provideEffects para proporcionar los efectos de la aplicación.
import { AuthEffects } from './auth.effects'; // Importa los efectos del módulo de autenticación.
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    // Configura el enrutador con las rutas, transiciones de vista y enlace de entrada de componentes.
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),

    // Proporciona animaciones de manera asíncrona.
    provideAnimationsAsync(),

    // Proporciona los proveedores de Firebase.
    firebaseProviders,

    // Proporciona el almacenamiento de estado con NgRx.
    provideStore(reducers),

    // Proporciona los efectos de NgRx.
    provideEffects([AuthEffects]),

    // Proporciona las herramientas de desarrollo de NgRx.
    provideStoreDevtools(),
  ],
};