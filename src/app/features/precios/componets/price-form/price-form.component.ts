import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { PriceService } from '../../services/precios.service';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrl: './price-form.component.css',
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
  ],

})
export class PriceFormComponent {
  priceForm: FormGroup;
  
  // Inyectar servicio
  private priceServiceInstance = priceService();

  // Signals del servicio
  prices = this.priceServiceInstance.prices;
  averagePrice = this.priceServiceInstance.averagePrice;
  loading = this.priceServiceInstance.loading;
  error = this.priceServiceInstance.error

  constructor() {
    // Efecto para detectar cambios en precios
    computed(() => {
      console.log('Precios actualizados:', this.prices());
    });

    // Carga inicial de precios
    this.loadPrices();
  }

  // Cargar precios
  loadPrices() {
    this.priceServiceInstance.loadPrices();
  }

  // Agregar precio de prueba
  addPrice() {
    this.priceServiceInstance.addPrice({
      date: new Date(),
      value: Math.random() * 100,
      currency: 'USD',
      provider: 'Test Provider',
    });
  }
}