import { Component, Signal } from '@angular/core';
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

 constructor(private cartservice: CartService) {
  this.cartItem = this.cartservice.cartItem;
 }
 


}
