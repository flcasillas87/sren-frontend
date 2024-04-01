import { Component, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'sren';

  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
