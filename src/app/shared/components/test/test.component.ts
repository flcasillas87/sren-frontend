import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navItems } from '../../../core/models/navigation.model';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  navItems = navItems;
  title = 'Test Component';

}
