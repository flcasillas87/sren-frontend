import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { HeaderDividerComponent } from './header-divider/header-divider.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { HeaderTogglerComponent } from './header-toggler/header-toggler.component';

type Container = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderBrandComponent,
    HeaderDividerComponent,
    HeaderLogoComponent,
    HeaderNavComponent,
    HeaderSearchComponent,
    HeaderTextComponent,
    HeaderTogglerComponent,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
