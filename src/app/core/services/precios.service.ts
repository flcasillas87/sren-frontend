// features/prices/services/price.service.ts
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const priceService = () => {
  const http = inject(HttpClient);
  const apiUrl = '/api/prices';

  return {
    getPrices: () => http.get<Price[]>(apiUrl),
    addPrice: (price: Price) => http.post<Price>(apiUrl, price)
  };
};
