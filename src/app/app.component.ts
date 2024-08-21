import { Component, inject } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardComponent } from './shared/components/card/card.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { TestComponent } from './shared/components/test/test.component';
import { TableComponent } from './shared/components/table/table.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MenuItem } from './core/models/navigation.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    DashboardComponent,
    TestComponent,
    TableComponent,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SREN';

}
