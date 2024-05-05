import { Component, inject, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MatIconModule } from '@angular/material/icon';

import { INavData } from '../../../core/interfaces/navigation.interface';

import { NavegationService } from '../../../core/services/navegation.service';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TestComponent } from '../test/test.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    CardComponent,
    DashboardComponent,
    TestComponent,
    RouterOutlet,
    MatCheckboxModule,
    SidebarComponent,
  ],
})
export class NavigationComponent {
  private navegationService = inject(NavegationService);
  events: string[] = [];
  opened: boolean=false;
  inavData: INavData[] = [];

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );
}
