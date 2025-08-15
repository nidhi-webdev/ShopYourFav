import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PRODUCTS } from '../Models/products.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product!: Signal<PRODUCTS[]>
  apiUrl: string = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) {
    this.product = toSignal(this.http.get<PRODUCTS[]>(this.apiUrl), {initialValue: []});
  }
}
