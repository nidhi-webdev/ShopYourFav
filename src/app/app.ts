import { Component, signal } from '@angular/core';
import { ProductComponent } from './Components/product-component/product-component';
import { AddToCartComponent } from './Components/add-to-cart-component/add-to-cart-component';


@Component({
  selector: 'app-root',
  imports: [ ProductComponent, AddToCartComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('e-commerce');
}
