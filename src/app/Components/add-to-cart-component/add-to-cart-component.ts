import { Component, computed, signal, Signal } from '@angular/core';
import { CartService } from '../../Services/cart-service';
import { PRODUCTS } from '../../Models/products.model';

@Component({
  selector: 'app-add-to-cart-component',
  imports: [],
  templateUrl: './add-to-cart-component.html',
  styleUrl: './add-to-cart-component.scss'
})
export class AddToCartComponent {
  cartItem!: Signal<PRODUCTS[]>;
  countSignal = signal<number>(0); // Count Functionality

  constructor(private cartservice: CartService) {
    this.cartItem = this.cartservice.cartItem;
  }

  // Count Functionality 

  computeSignal = computed(() => this.countSignal());

  plus() {
    this.countSignal.set(this.countSignal() + 1);
  }

  minus() {
    if (this.countSignal() > 0) {
      this.countSignal.set(this.countSignal() - 1);
    }
  }



}
