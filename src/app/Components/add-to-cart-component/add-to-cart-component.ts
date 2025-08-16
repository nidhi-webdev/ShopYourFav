import { Component, computed, signal, Signal } from '@angular/core';
import { CartService } from '../../Services/cart-service';
import { CARTPRODUCT, PRODUCTS } from '../../Models/products.model';
// import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-to-cart-component',
  imports: [],
  templateUrl: './add-to-cart-component.html',
  styleUrl: './add-to-cart-component.scss'
})
export class AddToCartComponent {
  cartItem!: Signal<CARTPRODUCT[]>;
  // grandTotal!: number;
  // countSignal = signal<number>(1); // Count Functionality

  constructor(private cartservice: CartService) {
    this.cartItem = this.cartservice.cartItem;
    // console.log("From cart", this.cartItem())
  }

  //calling the service funstion 
  addToCart(product: PRODUCTS) {
    this.cartservice.addToCartService(product);
  }


  removeFromCart(product: PRODUCTS) {
    this.cartservice.removeFromCartService(product)
  }

  grandTotal = computed(() =>
    this.cartItem().reduce((acc, cur) =>
      acc + cur.product.price * cur.quantity, 0
    )
  );

}
