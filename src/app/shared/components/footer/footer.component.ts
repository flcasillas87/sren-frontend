import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterContentService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatCardModule, MatListModule, CommonModule, MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private footerService = inject(FooterContentService);
  footerContent = this.footerService.getFooterContent();
}