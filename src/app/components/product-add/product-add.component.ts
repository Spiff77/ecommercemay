import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductHttpService} from '../../services/product-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  myForm!: FormGroup

  constructor(private fb: FormBuilder,
              private router: Router,
              private productService: ProductHttpService) {
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      name: '',
      active: '',
      description: '',
      category: '',
      promo: '',
      price: '',
    })
  }

  onSumbit(){
    this.productService.add(this.myForm.value).subscribe(() => this.router.navigateByUrl("/products"));
  }


}
