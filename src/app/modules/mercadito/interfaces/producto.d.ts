import { Inventario, Marca, Precio } from './misc-types';

export interface Producto {
  id: number;
  createdAt: Date;
  descripcion: string;
  codigoProducto: string;
  inhabilitado: boolean;
  oferta: boolean;
  subclase: Subclase;
  marca: Marca;
  inventario: Inventario[];
  precios: Precio[];
}