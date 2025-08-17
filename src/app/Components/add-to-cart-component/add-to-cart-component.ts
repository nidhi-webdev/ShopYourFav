import { Component, computed, Signal } from '@angular/core';
import { CartService } from '../../Services/cart-service';
import { CARTPRODUCT, PRODUCTS } from '../../Models/products.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-to-cart-component',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-component.html',
  styleUrl: './add-to-cart-component.scss'
})
export class AddToCartComponent {
  cartItem!: Signal<CARTPRODUCT[]>;
  
  constructor(private cartservice: CartService,
    private router: Router
  ) {
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

  goToCheckout() {
    this.router.navigate(['checkout']);
  }

}
