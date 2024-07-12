import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationModel } from '../../../core/models/navigation.model';
import { NavegationService } from '../../../core/services/navegation.service';
import { SidebarNavComponent } from '../sidebar/sidebar-nav/sidebar-nav.component';
import { SidebarHeaderComponent } from '../sidebar/sidebar-header/sidebar-header.component';
import { HeaderComponent } from '../header/header.component';
import { HeaderTogglerComponent } from '../header/header-toggler/header-toggler.component';
import { HeaderLogoComponent } from '../header/header-logo/header-logo.component';
import { HeaderBrandComponent } from '../header/header-brand/header-brand.component';
import { HeaderDividerComponent } from '../header/header-divider/header-divider.component';
import { HeaderNavComponent } from '../header/header-nav/header-nav.component';
import { HeaderSearchComponent } from '../header/header-search/header-search.component';
import { HeaderTextComponent } from '../header/header-text/header-text.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    SidebarNavComponent,
    SidebarHeaderComponent,
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    RouterLink,
  ],
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
