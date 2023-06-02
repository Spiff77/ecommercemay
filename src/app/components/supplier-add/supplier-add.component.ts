import { Component } from '@angular/core';
import {Supplier} from '../../model/supplier.model';
import {SupplierHttpService} from '../../services/supplier-http.service';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent {

  supplier: Supplier = {
    id: 0,
    bankAccountNumber:'',
    companyName: '',
    ca: 0
  }
  formSubmitted = false

  constructor(private supplierService: SupplierHttpService) {}

  submitForm(form: NgForm){
    this.formSubmitted = true
    this.supplierService.add(this.supplier).subscribe()
  }

}
