import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductHttpService} from '../../services/product-http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  currentProduct:Product | undefined;
  displayDeleteConfirm = false;

  constructor(private activeRoute: ActivatedRoute,
              private productService: ProductHttpService,
              private router: Router
  ) {}

  ngOnInit(): void {
    let id = Number(this.activeRoute.snapshot.paramMap.get('id') ?? -1);

    if(Number(id) >= 1){
       this.productService.findOne(id).subscribe(p => this.currentProduct = p)
    }
  }

  deleteForReal() {
    if(this.currentProduct?.id)
      this.productService.remove(this.currentProduct.id).subscribe(() => this.router.navigateByUrl('/products'))
  }
}
