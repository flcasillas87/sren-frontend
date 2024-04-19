import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header-logo',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterLinkActive,
    RouterModule,
  ],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.css',
})
export class HeaderLogoComponent {}
