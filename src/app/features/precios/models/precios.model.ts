export interface Price {
  id: string;
  date: Date;
  value: number;
  currency: 'USD' | 'MXN';
  provider: string;
}
