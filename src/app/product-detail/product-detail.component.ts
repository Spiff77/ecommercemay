import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductHttpService} from '../product-http.service';
import {Observable} from 'rxjs';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  currentProduct!:Product;
  displayDeleteConfirm = false;

  constructor(private activeRoute: ActivatedRoute,
              private productService: ProductHttpService,
              private router: Router,
              private productNotif: ProductService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe( param => {
      let myid = Number(param.get('id')) ?? -1
      if(Number(myid) >= 1){
         this.productService.findOne(myid).subscribe(p => this.currentProduct = p)
    }
  })
  }

  deleteForReal() {
    this.productService.remove(this.currentProduct.id).subscribe(() => this.productNotif.sendNotification())
  }
}
