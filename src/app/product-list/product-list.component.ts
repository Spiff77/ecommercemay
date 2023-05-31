import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor() {
    console.log("Constructor")
  }

  selectedProduct: Product | undefined
  filterStr = '';

  products: Product[] = [
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

  receiveDataFromChild(p: Product){
    this.selectedProduct = p
  }

  setFilterStr(evt: Event) {
    this.filterStr = (evt.target as HTMLInputElement).value;
    console.log(this.filterStr)
  }

  getProductsFiltered(): Product[] {
    return this.products.filter(p => p.name.toLowerCase().includes(this.filterStr.toLowerCase()))
  }

}
