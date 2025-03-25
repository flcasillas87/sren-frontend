export interface MenuItem {
  id: string | number;
  url: string;
  label?: string;
  name: string;
  href: string;
  icon?: string;
  iconComponent?: any; // Si tienes un tipo específico para los componentes de ícono, cámbialo aquí
  title?: string;
  variant?: string;
  divider?: boolean; // Cambié el tipo a booleano para indicar si es un divisor
}
