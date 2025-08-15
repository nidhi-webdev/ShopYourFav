import { Injectable, signal } from '@angular/core';
import { PRODUCTS } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem = signal<PRODUCTS[]>([]);
  
addToCartService(product: PRODUCTS) {
  this.cartItem.update(items => [...items, product]);
}

clearCart() {
  this.cartItem.set([]);
}

}
