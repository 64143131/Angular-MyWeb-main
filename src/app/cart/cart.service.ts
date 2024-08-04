import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity! += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.cart);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(product => product.id !== productId);
    this.cartSubject.next(this.cart);
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0);
  }

  getCartCount(): number {
    return this.cart.reduce((count, product) => count + (product.quantity || 0), 0);
  }
}
