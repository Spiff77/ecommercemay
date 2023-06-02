import {AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../services/product.service';
import {ProductHttpService} from '../../services/product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  selectedProduct: Product | undefined
  filterStr = '';

  products: Product[] = []

  constructor(private ps: ProductHttpService) {}

  ngOnInit(): void {
    this.ps.findAll().subscribe(v => this.products = v)
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
