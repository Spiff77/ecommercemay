import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Supplier} from '../model/supplier.model';
import {environment as env} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SupplierHttpService {

  url = env.apiurl + 'suppliers'

  constructor(private http: HttpClient) { }

  findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.url)
  }

  findOne(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(this.url+'/'+id)
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(this.url+'/'+id)
  }

  add(supplier:Supplier): Observable<void> {
    return this.http.post<void>(this.url, supplier)
  }
}
