import { Component } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedProduct: Product | undefined

  product1: Product = {
    id: 20,
    name: '1984',
    description: 'un livre qu\'il est bien pour le lire',
    price: 10,
    promo: .3,
    active: true,
    category: 'Book',
  }
  product2: Product = {
    id: 20,
    name: 'Frank Zappa',
    description: 'un CD qu\'il est bien pour l\'écouter',
    price: 10,
    promo: .3,
    active: true,
    category: 'CD',
  }
  receiveDataFromChild(p: Product){
    this.selectedProduct = p
  }

}
