import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductHttpService} from '../../services/product-http.service';
import {Router} from '@angular/router';
import {Supplier} from '../../model/supplier.model';
import {SupplierHttpService} from '../../services/supplier-http.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  myForm!: FormGroup
  formSubmitted = false
  suppliers: Supplier[] = []

  constructor(private fb: FormBuilder,
              private router: Router,
              private supplierService: SupplierHttpService,
              private productService: ProductHttpService) {
  }

  ngOnInit(): void {

    this.supplierService.findAll().subscribe(v =>{
      this.suppliers = v
      this.myForm.get('supplier.id')?.setValue(this.suppliers[0].id)
    })

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      active: '',
      description: ['', [Validators.required, Validators.minLength(10)]],
      category: '',
      promo: '',
      price: '',
      supplier: this.fb.group({
        id: ''
      })
    })
  }

  onSumbit(){
    this.formSubmitted = true
    if(this.myForm.valid){
      this.productService.add(this.myForm.value).subscribe(() => this.router.navigateByUrl("/products"));
    }
  }


}
