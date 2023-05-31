import { Injectable } from '@angular/core';
import {Product} from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 20,
      name: '1984',
      description: 'un livre qu\'il est bien pour le lire',
      price: 10,
      promo: .3,
      active: true,
      category: 'Book',
    }, {
      id: 20,
      name: 'Frank Zappa',
      description: 'un CD qu\'il est bien pour l\'écouter',
      price: 10,
      promo: .3,
      active: true,
      category: 'CD',
    }
  ]

  findAll(): Product[]{
    return this.products;
  }

  add(product: Product){
    this.products.push(product)
  }

  findOne(id: number): Product | undefined{
    return this.products.find(p => p.id === id);
  }

  delete(id: number): void{
    let searchElement = this.products.find(p => p.id === id);
    if(searchElement)
      this.products.splice(this.products.indexOf(searchElement), 1);
  }


}
