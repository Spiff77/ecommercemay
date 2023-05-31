import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  product: Product | undefined

  @Output()
  evtEmit = new EventEmitter<Product>()

  @HostListener('click')
  sendData(){
    this.evtEmit.emit(this.product)
  }
}
