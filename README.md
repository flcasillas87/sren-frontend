# SREN

Aplicación Angular

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Estructura del Proyecto

src/
├── app/
│   ├── core/
│   │   ├── interceptors/
│   │   │   └── auth.interceptor.ts
│   │   ├── models/
│   │   │   └── user.model.ts
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   └── core.module.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   └── header.component.ts
│   │   │   ├── footer/
│   │   │   │   └── footer.component.ts
│   │   │   └── layout/
│   │   │       └── layout.component.ts
│   │   ├── directives/
│   │   │   └── highlight.directive.ts
│   │   ├── pipes/
│   │   │   └── date-format.pipe.ts
│   │   └── shared.module.ts
│   ├── features/
│   │   ├── admin/
│   │   │   └── admin.component.ts
│   │   ├── dashboard/
│   │   │   └── dashboard.component.ts
│   │   ├── precios/
│   │   │   └── precios.component.ts
│   │   └── card/
│   │       └── card.component.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── assets/
│   └── images/
├── environments/
│   ├── environment.prod.ts
│   └── environment.ts
├── styles/
│   └── styles.scss
└── main.ts

## src/app/core
Contiene los interceptores HTTP, como auth.interceptor.ts, que se utilizan para interceptar y modificar las solicitudes HTTP.

## src/app/shared
Contiene componentes reutilizables, directivas y pipes.

## src/app/features
Contiene módulos de características específicas de la aplicación.

## src/assets
Contiene recursos estáticos como imágenes.

## src/environments
Contiene archivos de configuración de entornos, como environment.ts y environment.prod.ts.

## src/styles
Contiene archivos de estilos globales, como styles.scss.

## src/main.ts
El punto de entrada principal de la aplicación Angular.
## NrRx
Acciones: Coloca todas las acciones relacionadas en un archivo dentro de la carpeta actions.
Reducers: Coloca todos los reducers relacionados en un archivo dentro de la carpeta reducers.
Efectos: Coloca todos los efectos relacionados en un archivo dentro de la carpeta effects.
Modelos: Define los modelos de datos en la carpeta models