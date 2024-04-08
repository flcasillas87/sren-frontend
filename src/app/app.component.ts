import { Component,  } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LayoutComponent,
    RouterLink, 
    NavigationComponent,
    RouterLinkActive, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sren';
}
