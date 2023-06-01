import {EventEmitter, Injectable} from '@angular/core';
import {Product} from './model/product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _notification = new Subject<void>

  get notification(){
    return this._notification
  }

  sendNotification(): void{
    this._notification.next()
  }

}
