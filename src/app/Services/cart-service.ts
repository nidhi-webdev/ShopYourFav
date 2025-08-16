import { Injectable, signal } from '@angular/core';
import { CARTPRODUCT, PRODUCTS } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItem = signal<CARTPRODUCT[]>([]);

  addToCartService(product: PRODUCTS) {
    this.cartItem.update(items => {

      const found = items.find(item => item.product.id == product.id);
      if(found) {
        return items.map(item => 
          item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item
        );
       
      } else {
        return [...items, {product, quantity: 1}];
      }
    });
  }

  removeFromCartService(product: PRODUCTS) {
    this.cartItem.update(items => {
      return items.map(item => item.product.id === product.id ? 
      {...item, quantity: item.quantity - 1} : item
      ).filter(item => item.quantity > 0)

    });
  }

  // clearCart() {
  //   this.cartItem.set([]);
  // }



}
