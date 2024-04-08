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
import { INavData } from '../../../core/interfaces/navigation.interface';
import { NavegationService } from '../../../core/services/navegation.service';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TestComponent } from '../test/test.component';
import { RouterOutlet } from '@angular/router';

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
  ],
})
export class NavigationComponent {
  iNavData: INavData[];
  constructor(private navegationService: NavegationService) {
    this.iNavData = this.navegationService.getNavigationItems();
  }

  private breakpointObserver = inject(BreakpointObserver);


  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
