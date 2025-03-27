import { inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Price {
  id: string;
  date: Date;
  value: number;
  currency: 'USD' | 'MXN';
  provider: string;
}

export const priceService = () => {
  const http = inject(HttpClient);
  
  // Estado reactivo
  const prices = signal<Price[]>([]);
  const loading = signal(false);
  const error = signal<string | null>(null);

  // Precio promedio computado
  const averagePrice = computed(() => {
    if (prices().length === 0) return 0;
    return prices().reduce((sum, p) => sum + p.value, 0) / prices().length;
  });

  // Cargar precios desde API
  const loadPrices = async () => {
    loading.set(true);
    try {
      const result = await http.get<Price[]>('/api/prices').toPromise();
      prices.set(result || []);
      error.set(null);
    } catch (err) {
      error.set('Error cargando precios');
      console.error(err);
    } finally {
      loading.set(false);
    }
  };

  // Agregar nuevo precio
  const addPrice = async (newPrice: Omit<Price, 'id'>) => {
    loading.set(true);
    try {
      const createdPrice = await http.post<Price>('/api/prices', {
        ...newPrice,
        id: crypto.randomUUID()
      }).toPromise();
      
      prices.update(current => [...current, createdPrice!]);
      error.set(null);
      return createdPrice;
    } catch (err) {
      error.set('Error guardando precio');
      throw err;
    } finally {
      loading.set(false);
    }
  };

  return {
    prices: prices.asReadonly(),
    averagePrice,
    loading: loading.asReadonly(),
    error: error.asReadonly(),
    loadPrices,
    addPrice
  };
};