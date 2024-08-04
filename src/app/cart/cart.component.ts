// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService, Product } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
