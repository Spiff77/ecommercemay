import {Supplier} from './supplier.model';

export interface Product {
  id: number,
  name: string,
  active: boolean,
  description: string,
  category: string,
  promo: number,
  price: number,
  supplier?: Supplier
}
