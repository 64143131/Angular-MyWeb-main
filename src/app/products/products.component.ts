// products.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://images.hdqwalls.com/wallpapers/retro-car-hotel-outside-4k-4v.jpg',
      description: 'Description for product 1',
      price: 100
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://images.hdqwalls.com/wallpapers/retro-car-hotel-outside-4k-4v.jpg',
      description: 'Description for product 2',
      price: 200
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://images.hdqwalls.com/wallpapers/retro-car-hotel-outside-4k-4v.jpg',
      description: 'Description for product 3',
      price: 300
    }
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
