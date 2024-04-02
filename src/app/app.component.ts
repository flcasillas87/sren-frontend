import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import {  RouterLink,  RouterLinkActive, RouterOutlet,} from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'sren';

}
