import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContent } from './footer-content.interface';
import { FooterContentService } from './footer-content.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatCardModule, MatListModule, CommonModule, MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  footerContent!: FooterContent;

  constructor(private footerContentService: FooterContentService) {}

  ngOnInit(): void {
    this.footerContentService.getFooterContent().subscribe((data) => {
      this.footerContent = data;
    });
  }
}
