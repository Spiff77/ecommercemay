import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ActivatedRoute} from '@angular/router';
import {ProductHttpService} from '../product-http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  currentProduct!:Product;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductHttpService) {
  }

  ngOnInit(): void {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id') ?? -1);

    if(Number(id) >= 1){
       this.productService.findOne(id).subscribe(p => this.currentProduct = p)
    }
  }

}
