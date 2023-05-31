import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  selectedProduct: Product | undefined
  filterStr = '';

  products: Product[] = []

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.products = this.ps.findAll()
  }

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
