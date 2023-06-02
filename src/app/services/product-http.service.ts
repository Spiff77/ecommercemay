import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {environment as env} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  url = env.apiurl + 'products'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }

  findOne(id: number): Observable<Product> {
    return this.http.get<Product>(this.url+'/'+id)
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+id)
  }

  add(product:Product): Observable<void> {
    return this.http.post<void>(this.url, product)
  }
}
