import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';
import {environment as env} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  url = env.apiurl + 'products'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }
}
