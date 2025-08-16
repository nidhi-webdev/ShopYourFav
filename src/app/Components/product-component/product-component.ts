import { Component, Signal } from '@angular/core';
import { ProductsService } from '../../Services/products-service';
import { PRODUCTS } from '../../Models/products.model';
import { CartService } from '../../Services/cart-service';


@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss'
})
export class ProductComponent {
  productData: Signal<PRODUCTS[]>


 constructor(private productservice: ProductsService,
  private cartservice: CartService
 ) {
  this.productData = this.productservice.product;
 }

 addTocart(product: PRODUCTS) {
   this.cartservice.addToCartService(product);
 }
}
