import { Injectable, signal, computed } from '@angular/core';
import { Price } from '../models/precios.model';
@Injectable({
  providedIn: 'root'
})
export class PriceService {

  //Signal para mantener el estado reactivo de los precios
  private prices = signal<Price[]>([]);

  // Agregar un precio
  addPrice(price: Omit<Price, 'id'>) {
    const newPrice: Price = { ...price, id: crypto.randomUUID() };
    this.prices.update(p => [...p, newPrice]);
    return newPrice;
  }

  // Obtener todos los precios
  getPrices() {
    return this.prices.asReadonly();
  }


}