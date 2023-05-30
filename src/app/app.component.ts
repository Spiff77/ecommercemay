import { Component } from '@angular/core';
import {Product} from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  myProduct: Product = {
    id:2,
    name:"Cd 2 musik",
    description: 'un produit qu\'il est bien pour écouter la musique',
    promo: .1,
    active: true,
    category: 'Media',
    price: 10
  }

  myColor='red'

  toggleActive() {
    this.myProduct.active = !this.myProduct.active
  }

  changeColor(event: Event) {
      this.myColor = (event.target as HTMLSelectElement).value
  }
}
