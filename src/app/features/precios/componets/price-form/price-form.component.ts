import { Component, inject, signal } from '@angular/core';
import {  } from '../../services/precios.service';

@Component({
  standalone: true,
  template: `
    <button (click)="loadPrices()" [disabled]="loading()">
      {{ loading() ? 'Cargando...' : 'Actualizar precios' }}
    </button>
  `
})
export class PriceComponent {
  // Inyectar servicio
 // private priceService = inject(PriceService);
  
  // Estado reactivo
  loading = signal(false);
 // prices = signal<Price[]>([]);

  async loadPrices() {
    this.loading.set(true);
   // const prices = await this.priceService.getPrices();
   // this.prices.set(prices);
    this.loading.set(false);
  }
}