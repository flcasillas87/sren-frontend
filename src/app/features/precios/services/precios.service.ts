import { inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Price } from '../models/precios.model';
import { firstValueFrom } from 'rxjs';

export class PriceService {

  // Usamos signal para manejar el estado reactivo
  private pricesSignal = signal<Price[]>([]);
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);

  // Computed para calcular el precio promedio basado en los precios
  averagePrice = computed(() => {
    const prices = this.pricesSignal();
    if (prices.length === 0) return 0;
    return prices.reduce((sum, p) => sum + p.value, 0) / prices.length;
  });
  
  constructor(private http: HttpClient) {}

  // Cargar precios desde la API
  loadPrices(): void {
    this.loadingSignal.set(true);
    this.http.get<Price[]>('/api/prices').subscribe(
      (result) => {
        this.pricesSignal.set(result || []);
        this.errorSignal.set(null);
      },
      (error) => {
        this.errorSignal.set('Error cargando precios');
      },
      () => {
        this.loadingSignal.set(false);
      }
    );
  }

  // Agregar un nuevo precio
  addPrice(newPrice: Omit<Price, 'id'>): void {
    this.loadingSignal.set(true);
    this.http.post<Price>('/api/prices', newPrice).subscribe(
      (createdPrice) => {
        this.pricesSignal.update((prices) => [...prices, createdPrice]);
        this.errorSignal.set(null);
      },
      (error) => {
        this.errorSignal.set('Error guardando precio');
      },
      () => {
        this.loadingSignal.set(false);
      }
    );
  }
};